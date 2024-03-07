FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install

# RUN npx playwright install-deps
# alternative for ubuntu 20.04 for playwright depts
RUN apt-get update && \
    apt-get install -y \
    libnss3 \
    libnspr4 \
    libdbus-1-3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libatspi2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libxkbcommon0 \
    libasound2 \
    && rm -rf /var/lib/apt/lists/*

COPY . .

ENTRYPOINT [""]
