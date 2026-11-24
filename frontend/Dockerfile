FROM node:26-bookworm-slim AS base

WORKDIR /home/node
USER node

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173

FROM base AS development
ENV NODE_ENV=development
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--strictPort"]

FROM base AS production
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173", "--strictPort"]
