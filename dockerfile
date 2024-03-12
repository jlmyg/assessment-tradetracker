FROM node:20-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx -y playwright@1.42.1 install --with-deps

RUN npm ci

COPY . .

ENTRYPOINT [""]
