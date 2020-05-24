FROM httpd:alpine

WORKDIR $PROJECT_HOME

COPY index.html /usr/local/apache2/htdocs
