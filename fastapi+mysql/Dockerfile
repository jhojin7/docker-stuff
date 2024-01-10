FROM python:3
WORKDIR /app

COPY app/requirements.txt requirements.txt
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install -r requirements.txt
EXPOSE 8000
CMD ["uvicorn", "app:app:app"]
