# Base Node.js image
FROM node:16

# Create app directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy app source code
COPY . .

# Build NextJS application
RUN yarn build

# Expose the NestJS API port
EXPOSE 3000

# Start the application
CMD ["yarn", "start:dev"]
