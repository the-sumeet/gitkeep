# Build
FROM node:18 AS build
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json .

RUN npm ci

# Create .env file for runtime
RUN echo "MONGODB_URI=${MONGODB_URI}" > .env

COPY . .
RUN npm run build
RUN npm prune --production

# Run
FROM node:18 AS run
ARG MONGODB_URI
WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
ENTRYPOINT ["node", "build"]