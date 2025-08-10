# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Remove old node_modules & lock file (prevents Windows binaries issue)
RUN rm -rf node_modules package-lock.json

# Install dependencies fresh inside container
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
