# Common stage
FROM node:18 AS common

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

# Development stage
FROM common AS development

RUN apt-get update && apt-get install -y xdg-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

CMD ["pnpm", "host"]

# Build stage
FROM common AS build

RUN pnpm run build

# Production stage
FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set ownership of directories to nginx user
RUN mkdir -p /var/cache/nginx \
    && mkdir -p /var/log/nginx \
    && mkdir -p /etc/nginx/conf.d \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx \
    && chown -R nginx:nginx /etc/nginx/conf.d \
    && touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/run/nginx.pid

EXPOSE 80
USER nginx
CMD ["nginx", "-g", "daemon off;"]