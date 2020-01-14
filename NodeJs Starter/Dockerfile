FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm Install

# Bundle app source
COPY . .

EXPOSE 4005
CMD [ "node", "server.js" ]