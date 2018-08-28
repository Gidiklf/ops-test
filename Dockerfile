FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node dist/index.js
RUN npm run test && npm run build && npm run clean


