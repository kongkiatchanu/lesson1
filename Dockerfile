FROM httpd:alpine

RUN mkdir /app
ENV PROJECT_HOME /app

WORKDIR $PROJECT_HOME

COPY index.html /usr/local/apache2/htdocs
