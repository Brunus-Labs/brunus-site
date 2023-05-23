# Setup Node
FROM node:18 as base
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /app

# Doing it in this order helps caching
COPY package* pnpm-lock.yaml tsconfig.json next.config.js ./
RUN pnpm i

COPY . .

CMD ["pnpm", "dev"]
