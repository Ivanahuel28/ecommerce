FROM postgres
ENV POSTGRES_DB mydb
ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mysecretpassword
COPY /resources/database/db.sql /docker-entrypoint-initdb.d/