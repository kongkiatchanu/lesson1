FROM kongkiatchanu/serverlab:firsttry

RUN apk update && \
#    apk add curl && \
    apk add git && \
    apk add vim

WORKDIR /app

COPY . /app

#EXPOSE 3000

#CMD ["node", "index.js"]
