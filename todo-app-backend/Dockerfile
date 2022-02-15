FROM node:alpine3.11

# Create an application directory
RUN mkdir -p /app

RUN npm install -g typescript

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY . /app

# Install node packages
RUN npm install

EXPOSE 3001

# run script to compile ts files
RUN tsc -p .

CMD ["node", "src/index.js"]