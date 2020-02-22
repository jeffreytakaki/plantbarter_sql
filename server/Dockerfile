FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy the file from your host to your current location
COPY package*.json ./

# Install server npm dependencies
RUN npm install

# build client and start server 
CMD [ "npm", "start" ]

# Copy contents of server directory into user/src/app
COPY . .

# https://stackoverflow.com/questions/50103296/docker-compose-nodejs-mysql-cant-connect-mysql
# creating docker containers

