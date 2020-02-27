#Plant Barter 

Repo: https://github.com/jeffreytakaki/plantbarter_sql.git

The application is structured as such: 

root/
    server/ 
        client/ (create react app)

Requirements:

Node 10
Mysql 5.7
Docker (with docker compose)

Optional - Sequel Pro. This makes it easier to browse the database instead of using mysql command line. 

You can start this application in two ways:

Branch: master	Locally develop with this branch. This requires your local machine to have node, mysql 5.7 server installed and running. 

Checkout branch master
Cd into server/
Run “npm run dev”

Visit localhost:3000/ on your browser after the development server finishes its spin up. You can view it’s progress on the command line. 
Branch: docker	Use this branch to view the app or for production purposes.  It is difficult to develop and debug with this method since everything runs in containers. 

Download docker: https://www.docker.com/products/docker-desktop

Checkout branch docker
cd into root of the project where docker-compose.yml file is located and run “docker-compose up -d”

Visit localhost:5000/ on your browser

Features of the application:

Working features include user register, login/logout. 
Updating user info
Saving plants to the user
Deleting plants of a user


NOTES

On production - 
You can’t reload the page once logged in. It will process as unauthorized due to how the documents are served up by the node server. I have a wild card to capture the first visit to / and then to serve up the html document. All other requests are api related. Maybe I can solve this with /api/v1?Plant Barter 

Repo: https://github.com/jeffreytakaki/plantbarter_sql.git

The application is structured as such: 

root/
    server/ 
        client/ (create react app)

Requirements:

Node 10
Mysql 5.7
Docker (with docker compose)

Optional - Sequel Pro. This makes it easier to browse the database instead of using mysql command line. 

You can start this application in two ways:

Branch: master	Locally develop with this branch. This requires your local machine to have node, mysql 5.7 server installed and running. 

Checkout branch master
Cd into server/
Run “npm run dev”

Visit localhost:3000/ on your browser after the development server finishes its spin up. You can view it’s progress on the command line. 
Branch: docker	Use this branch to view the app or for production purposes.  It is difficult to develop and debug with this method since everything runs in containers. 

Download docker: https://www.docker.com/products/docker-desktop

Checkout branch docker
cd into root of the project where docker-compose.yml file is located and run “docker-compose up -d”

Visit localhost:5000/ on your browser

Features of the application:

Working features include user register, login/logout. 
Updating user info
Saving plants to the user
Deleting plants of a user


NOTES

On production - 
You can’t reload the page once logged in. It will process as unauthorized due to how the documents are served up by the node server. I have a wild card to capture the first visit to / and then to serve up the html document. All other requests are api related. Maybe I can solve this with /api/v1?
