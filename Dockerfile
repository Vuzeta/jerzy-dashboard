FROM node:alpine
USER root
WORKDIR /jerzy-dashboard
COPY package*.json ./
RUN npm install --unsafe-perm=true --allow-root
RUN npm config set unsafe-perm true
COPY . ./
CMD ["npm","start"]
