FROM httpd:alpine
RUN apk update && apk add /bin/sh

COPY target/. /usr/local/apache2/htdocs
