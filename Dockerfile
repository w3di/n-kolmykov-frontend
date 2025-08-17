# 1. Сборка приложения
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Запуск приложения
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Создаём пользователя без прав root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/package-lock.json ./ 
COPY --from=builder /app/next.config.js ./ 
COPY --from=builder /app/.env.production ./.env.production

RUN npm ci --omit=dev

# Копируем билд и статику
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Делаем пользователя владельцем папки
RUN chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]