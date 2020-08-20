FROM node:12

WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

# RUN yarn && yarn certs
COPY . /usr/src/app

CMD ["npm", "start"]