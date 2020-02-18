FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Copy contents of server directory into user/src/app
COPY . .

# Install server npm dependencies
RUN npm install

# Change directory into client directory, install npm dependencies and start the developer server
RUN cd ./client
RUN npm install
RUN npm start

EXPOSE 5000

RUN cd ../server
CMD [ "node", "index.js" ]

# https://stackoverflow.com/questions/50103296/docker-compose-nodejs-mysql-cant-connect-mysql
# creating docker containers

