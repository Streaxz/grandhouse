# Install dependencies
FROM node:20-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./sources/package.json ./sources/package-lock.json ./
RUN npm cache clean --force
RUN test -e package-lock.json && npm i --legacy-peer-deps || npm i

# Build an image
FROM node:20-alpine AS builder
WORKDIR /app
COPY ./sources .
COPY --from=deps /app/node_modules ./node_modules
ARG NEXT_PUBLIC_API_URL
RUN npm run build

# Setup final image
FROM node:20-alpine AS app
WORKDIR /app
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
ENV NEXT_TELEMETRY_DISABLED 1
CMD [ "npm", "run", "start:prod" ]
