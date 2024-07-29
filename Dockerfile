#syntax=docker/dockerfile:1.4

####################
# Builder for dev  #
####################
FROM node:21.0.0-alpine as dev
WORKDIR /app
ENV NODE_ENV development
ENV PORT 3000
COPY . .

RUN yarn install

USER node
EXPOSE 3000
CMD ["yarn", "dev"]


####################
# Builder for test #
####################
FROM imbios/bun-node:21-slim AS builder-test
WORKDIR /app
COPY . .
COPY .env.test .env
RUN bun install && bun add sharp && bun run build

FROM node:21.0.0-alpine AS test
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder-test /app/next.config.mjs ./
COPY --from=builder-test --chown=node:nodejs /app/.next/standalone ./
COPY --from=builder-test --chown=node:nodejs /app/.next/static ./.next/static
COPY --from=builder-test --chown=node:nodejs /app/public ./public

USER node
EXPOSE 3000
CMD ["node", "server.js"]


####################
# Builder for prod #
####################
FROM imbios/bun-node:21-slim AS builder-prod
WORKDIR /app
COPY . .
COPY .env.prod .env
RUN bun install && bun add sharp && bun run build

FROM node:21.0.0-alpine AS prod
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder-prod /app/next.config.mjs ./
COPY --from=builder-prod --chown=node:nodejs /app/.next/standalone ./
COPY --from=builder-prod --chown=node:nodejs /app/.next/static ./.next/static
COPY --from=builder-prod --chown=node:nodejs /app/public ./public

USER node
EXPOSE 3000
CMD ["node", "server.js"]
