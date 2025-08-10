# Use Node 20 LTS for backend
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for efficient caching)
COPY package*.json ./

# Install dependencies without dev dependencies
RUN npm install --omit=dev

# Copy the rest of the backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "start"]
