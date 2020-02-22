FROM mysql:5.7

RUN apt-get update && apt-get install -y vim

WORKDIR /usr/src/app

ENV MYSQL_DATABASE plantbarter
# COPY SQL DUMP FILE TO BE POPULATE INTO PLANTBARTER DB
# COPY . /docker-entrypoint-initdb.d
COPY . . 

# RUN chmod +x init.sh && \
# ./init.sh


