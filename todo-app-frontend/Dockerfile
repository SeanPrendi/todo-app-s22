FROM node:alpine3.11

# Create an application directory
RUN mkdir -p /app

RUN npm install -g typescript

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY ./ ./

# Install node packages
RUN npm install

# run script to build react app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]