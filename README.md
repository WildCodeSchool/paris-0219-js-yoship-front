## YoShip

YoShip is a cool project with a JS back and front app.

Front : https://github.com/GaetanRole/yoship-front
Back : https://github.com/GaetanRole/yoship-back
This project is made by Wild Code School students in Paris and it is made in Javascript (React / NodeJS). It aims to promote a new way of delivery (like Chronopost) but mainly for luxury brands.

### Installation instructions

Before starting you will need to `install mysql2` on your computer and create the database with the `yoship.sql` file you will find at the root of the back repository.

The npm packages need to be installed for both the front and the back. To do this, cd into the directories from your command line and run `npm install`.

Before starting you will need to create a `.env` file at the root of both the front and the back. 

For the back you will need to fill the following fields:
```
DB_USER = user for SQL database (use 'root' as default)
DB_PASSWORD = password for SQL database
DB_NAME = SQL database name
SUPER_PASSWORD = password for authentication, please choose a complicated password
PORT = port you wish to use for your back
MAIL_USER = email you wish to use to send emails to users
MAIL_PASSWORD = password for the email above
```
For the front you will need to fill the following fields:

REACT_APP_SERVER_PORT= port you will be using for the back (must be the same as PORT in the `.env` in the front)

After the packages have been installed, you can now run both the front and the back. You will need to run npm start on both sides.

Both sides are running in hot-reload mode, so changes will be put in place as you make them, instead of having to restart the service for each change.


