FROM node:7
WORKDIR /dist
COPY package.json /dist
RUN npm install
COPY . /dist
CMD node dist/index.js
RUN npm run build && npm run test && npm run clean



