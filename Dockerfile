FROM node:7
WORKDIR /dist
COPY package.json /dist
RUN npm install
COPY . /dist
CMD node dist/index.js
RUN npm run test && npm run build && npm run clean


