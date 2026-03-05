# 📋 Runbooks

## O que é?

Um documento com **instruções passo-a-passo** para diagnosticar e resolver um problema específico. É o "manual de emergência" que permite que **qualquer pessoa** do time resolva um incidente, mesmo sem conhecer os detalhes internos.

> Runbook bom: um júnior consegue seguir às 3h da manhã e resolver. Runbook ruim: "investigue e corrija" — obrigado, muito útil.

---

## Runbook vs Playbook vs Documentação

| Tipo | Foco | Quando usar |
|------|------|------------|
| **Runbook** | **Como resolver** um problema específico | Durante um incidente |
| **Playbook** | **Como responder** a uma categoria de incidentes | Processo de incident management |
| **Documentação** | **Como funciona** o sistema | Onboarding, referência |

---

## Exemplo prático — runbook real

```markdown
# 🔴 Runbook: payment-service — Alta Latência

**Alerta:** payment_service_latency_p99 > 2s por 5min
**Impacto:** Usuários não conseguem finalizar pagamentos
**Severidade:** SEV2
**Última revisão:** 2026-02-15
**Dono:** @time-payments

---

## 1. Verifique o impacto
- [ ] Abra o [dashboard do payment-service](http://grafana/d/payment)
- [ ] Confirme: a latência está alta em qual endpoint?
  - `/pay` → siga para passo 2
  - `/refund` → siga para passo 5
  - Todos → siga para passo 6

## 2. Verifique as dependências
- [ ] Abra o [dashboard de dependências](http://grafana/d/deps)
- [ ] A latência é da nossa aplicação ou de uma dependência?
  - **Banco de dados lento** → Passo 3
  - **API externa (PIX/cartão) lenta** → Passo 4
  - **Aplicação em si** → Passo 6

## 3. Banco de dados lento
- [ ] Verifique conexões ativas: deve ser < 80% do pool
  ```
  kubectl exec -it payment-db-0 -- psql -c "SELECT count(*) FROM pg_stat_activity"
  ```
- [ ] Se conexões > 90%: reinicie pods que estão idle
  ```
  kubectl rollout restart deployment/payment-service
  ```
- [ ] Se queries lentas: verifique no slow query log

## 4. API externa lenta
- [ ] Verifique status do provedor: [status.provedor.com]
- [ ] Ative o circuit breaker:
  ```
  kubectl set env deployment/payment-service CIRCUIT_BREAKER_PIX=true
  ```
- [ ] Comunique no canal: "Circuit breaker ativado para PIX"
- [ ] Crie ticket para acompanhar com o provedor

## 5. Endpoint /refund lento
- [ ] Geralmente causado por lock no banco durante reconciliação
- [ ] Verifique se o job de reconciliação está rodando
- [ ] Se sim, aguarde finalizar (máx 10min) ou mate o job:
  ```
  kubectl delete job reconciliation-job
  ```

## 6. Aplicação lenta (sem dependência externa)
- [ ] Verifique se houve deploy recente: `kubectl rollout history deployment/payment-service`
- [ ] Se sim, faça rollback:
  ```
  kubectl rollout undo deployment/payment-service
  ```
- [ ] Se não, verifique uso de memória (possível memory leak)
- [ ] Escalone para @time-payments-senior

---

## Escalação
Se nada acima resolver em 30 minutos:
- Acione: @tech-lead-payments (PagerDuty)
- Considere escalar para SEV1
```

---

## Estrutura de um bom runbook

| Seção | Obrigatório? | Descrição |
|-------|:-----------:|-----------|
| **Título e alerta associado** | ✅ | Qual alerta dispara este runbook |
| **Impacto** | ✅ | O que o usuário está sentindo |
| **Severidade** | ✅ | SEV1/2/3/4 |
| **Passos de diagnóstico** | ✅ | Checklist com links para dashboards/ferramentas |
| **Ações de remediação** | ✅ | Comandos exatos para resolver |
| **Escalação** | ✅ | Quem chamar se não resolver |
| **Última revisão** | ✅ | Quando foi validado pela última vez |
| **Dono** | ✅ | Quem mantém atualizado |
| **Histórico de uso** | Opcional | Quantas vezes foi usado, feedback |

---

## Onde guardar runbooks?

| Opção | Prós | Contras |
|-------|------|---------|
| **Wiki (Confluence, Notion)** | Fácil de editar, busca | Pode ficar desatualizado |
| **Repositório Git** | Versionado, review em PR | Menos acessível para não-devs |
| **Dentro do alerta** | Link direto, zero fricção | Limite de tamanho |
| **Ferramenta de incident** | Contexto integrado | Vendor lock-in |

> 💡 **Melhor prática:** guarde no Git (versionado) e **linke no alerta** (acesso rápido). Melhor dos dois mundos.

---

## Automatização de runbooks

A evolução natural:

```
Nível 1: 📄 Runbook manual (documento com passos)
    ↓
Nível 2: 📄 Runbook semi-automatizado (scripts prontos nos passos)
    ↓
Nível 3: 🤖 Runbook automatizado (executa automaticamente via alerta)
    ↓
Nível 4: 🤖 Auto-remediação (sistema se corrige sozinho)
```

> Comece no nível 1. Se o mesmo runbook é executado **mais de 3x por mês**, automatize.

---

## Boas práticas

- ✅ **Linke o runbook no alerta** — o on-call não deveria procurar
- ✅ Use **checklists** (não parágrafos) — às 3h ninguém lê texto corrido
- ✅ Inclua **comandos exatos** com copy-paste — não "rode o script de restart"
- ✅ Inclua **links diretos** para dashboards e ferramentas
- ✅ **Revise** após cada uso — o runbook funcionou? O que faltou?
- ✅ Defina um **dono** para cada runbook
- ✅ **Automatize** runbooks repetitivos (> 3x/mês)
- ❌ Não escreva runbooks com "investigue e resolva" — seja específico
- ❌ Não deixe runbooks desatualizados — pior que não ter runbook é ter um errado
- ❌ Não faça runbooks só para cumprir protocolo — faça para ser **usado**

---

## 🤔 Perguntas para reflexão

1. Um runbook que ninguém nunca usou é útil ou é lixo? Como você decide?
2. Se o on-call executa o mesmo runbook **toda semana**, o que isso diz sobre o sistema?
3. O runbook diz "reinicie o serviço". Mas reiniciar **esconde** o problema. Como equilibrar "resolver agora" com "resolver de verdade"?
