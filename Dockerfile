# 1. Сборка приложения
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Добавляем node_modules/.bin в PATH, чтобы next был виден
ENV PATH /app/node_modules/.bin:$PATH
RUN npm run build

# 2. Запуск приложения
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]