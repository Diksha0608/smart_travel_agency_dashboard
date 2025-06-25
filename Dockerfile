# 1. Base image for dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 2. Build image
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build || tail -n 100 ./build.log


# 3. Runtime image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy only what's needed to run the app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY package*.json ./

# For production SSR:
CMD ["npx", "react-router-serve", "./build/server/index.js"]
