FROM node:12

RUN mkdir -p /artssquare
WORKDIR /artssquare

COPY package.json /artssquare
RUN npm install
COPY . /artssquare
RUN npm run build
# RUN yarn && yarn certs
# COPY . /usr/src/app
EXPOSE  8080

CMD ["npm", "start"]