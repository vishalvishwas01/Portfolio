# Use an official Node.js image as the build stage
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY vite.config.* ./
COPY . .

# Install dependencies
RUN npm install

# Build the React project
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production

# Copy built app from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port (default is 80)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
