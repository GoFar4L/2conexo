FROM python:3.8-slim-buster

WORKDIR /app/backend

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_DEBUG=True

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0"]