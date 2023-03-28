
#My Finance Site

My Finance Site is a web application that allows users to track their financial assets and liabilities, including bank accounts and stocks. The site provides users with a combined value of all their financial holdings, as well as a rating system that uses colors and smiley faces to indicate their financial health.

Features

* User authentication: Users can create an account and log in to the site to access their financial data.
* Financial tracking: Users can add their financial holdings, including bank accounts and stocks, and track the total value of their assets and liabilities.
* Rating system: The site uses a color-coded och smilie rating system to indicate the user's financial health.
* Budget tracking: Users can input their monthly budget and count the daily spend you can have.
* Database storage: The site uses SQL to store user data, including financial information and login credentials.

Technologies Used

* Node.js
* Express.js
* React
* SQL

Getting Started

To run the project locally, follow these steps:

* Clone the repository to your local machine.
* Install dependencies by running npm install in both the root directory, frontend and backend.
* Set up the database by running the SQL scripts in the database directory.
* Navigate to backend/src and create a .env file.
* Copy the contents of .env.example into the new .env file and replace the values with your own configurations (i.e., database credentials, JWT secret, etc.)

------------
.env file contains
host = "localhost" user= "" password= "" database= ""

secret = ""

Start the server by running npm start in the root directory.
Start the client by running npm start in the client directory.
Navigate to http://localhost:3000 in your web browser to access the site.
