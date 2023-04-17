##Library Management Page


A simple library management page that allows users to see a list of books, filter the list based on Title, Author, Subject, and Publish-date, and perform paging on the list.

#Setup Instructions


Clone the repository from Github: git clone https://github.com/username/library-management-page.git
Install dependencies: npm install

Set environment variables: create a .env file and set the following variables:

PORT: the port number for the server to listen on

DB_URI: the URI for your database

Start the server: npm start

#Running the Application

Open a web browser and navigate to http://localhost:<PORT>

You should see a list of books, with options to filter by Title, Author, Subject, and Publish-date.

To page through the list, scrolling makes more components to load

The count of books which is filtered on each criteria (Title, Author, Subject, and Publish-date) is displayed at the top of the page.

