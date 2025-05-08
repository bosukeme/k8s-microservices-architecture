FROM python:3.13-alpine AS builder

WORKDIR /app

RUN apk update && apk add --no-cache build-base python3-dev

COPY requirements.txt /app 

RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.13-alpine

WORKDIR /app

COPY --from=builder /usr/local/lib/python3.13/site-packages /usr/local/lib/python3.13/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin


ENV PYTHONUNBUFFERED=1

COPY . .

EXPOSE 5000

CMD [ "python3", "app.py" ]
