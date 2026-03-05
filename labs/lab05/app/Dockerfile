FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

# Usa auto-instrumentação do OTel para Flask
CMD ["opentelemetry-instrument", "python", "app.py"]
