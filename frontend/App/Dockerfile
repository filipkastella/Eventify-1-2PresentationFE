# Multi-stage Dockerfile for Angular Frontend on Railway
# Stage 1: Build Angular app
FROM node:22.12 AS build

WORKDIR /app

# Copy package.json and package-lock.json for better caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .
RUN npm run build --configuration production

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy Angular build output to Nginx html folder
COPY --from=build /app/dist/App/browser /usr/share/nginx/html

# Create nginx configuration for Angular SPA routing
RUN echo 'server {' > /etc/nginx/conf.d/default.conf && \
    echo '    listen 80;' >> /etc/nginx/conf.d/default.conf && \
    echo '    server_name localhost;' >> /etc/nginx/conf.d/default.conf && \
    echo '    root /usr/share/nginx/html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    index index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    location / {' >> /etc/nginx/conf.d/default.conf && \
    echo '        try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

# Fix permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use pre-existing nginx user
USER nginx

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]