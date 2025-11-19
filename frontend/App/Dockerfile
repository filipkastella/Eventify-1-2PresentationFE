# Stage 1: Build Angular app
FROM node:22.12 AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Build Angular app using local Angular CLI
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output from dist folder
COPY --from=build /app/dist/App/browser /usr/share/nginx/html

# Copy custom nginx configuration for Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fix permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use existing nginx user
USER nginx

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]