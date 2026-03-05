FROM python:3.12-slim
WORKDIR /app
RUN pip install prometheus-client flask requests
COPY app.py .
EXPOSE 8000
CMD ["python", "app.py"]
