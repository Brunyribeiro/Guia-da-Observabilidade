FROM python:3.12-slim
WORKDIR /app
RUN pip install flask requests \
    opentelemetry-api \
    opentelemetry-sdk \
    opentelemetry-exporter-otlp \
    opentelemetry-instrumentation-flask \
    opentelemetry-instrumentation-requests
COPY app.py .
EXPOSE 8000 8001 8002 8003
CMD ["python", "app.py"]
