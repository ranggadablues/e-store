# ===============================
# 1. Install dependencies
# ===============================
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# ===============================
# 2. Build the Next.js project
# ===============================
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ===============================
# 3. Production Runner
# ===============================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy required files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Copy env if exists (optional)
COPY .env* ./

# Create runtime volume directory
RUN mkdir -p /app/data \
    && mkdir -p /app/public/products

EXPOSE 3000

CMD ["npm", "start"]
