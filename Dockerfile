FROM httpd:alpine

RUN mkdir /app
ENV PROJECT_HOME /app

COPY target/. /usr/local/apache2/htdocs
