
# Student Management System

Student Management System is a simple student management system that allows you to manage students, teachers, and classes.

It is built using the Next.js framework and uses a MySQL database.


<i>I Created this as a sample application for my final year project. Main application is built using the using same NextJS 13 but with a different database and different features. And I want to go back to typescript for its awesome developer experience, copilot will perform better with typescript and vscode will automatically pickup the type definitions thus providing awesome intellisense.<i>


## Features

- Allow Students,teachers to register and login with their credentials
- Store the password in the database in a hashed format using bcrypt 
- store the user's credentials in a browser cookies using react-cookie
- jsonwebtoken to generate a token for the user

## Main Modules

- Student Module
    - Student can register and login
    - Student can view his profile
    - Student can view his library information
    - Student can view his attendance
    - Student can view his exam results

- Teacher Module
    - Teacher can register and login
    - Teacher can view his profile and student's profile
    - Teacher can modify student Library information
    - Teacher can  post attendance
    - Teacher can post marks for students


## SQL Database

All the data for this application is stored in the MySQL database. named `CollegeCo`.

## SQL Tables

- `LoginDetails` table stores the user's login credentials.
- `UserInfo` table stores the student's information.
- `StudentAttendance` table stores the Studet's attendance. 
- `StudentMarks` table stores the student's marks. and
- `StudentLibrary` table stores the student's library information.

All the SQL queries are in the `sql` folder. You can import the database using the `student.sql` file.

The SQL file also contains the SQL queries to create the tables and insert the data into the tables. and Describe the tables.

The ER diagram for the database may not be accurate. I will update it soon.

## Backend 

The Nextjs framework is used to build the backend of this application. The backend is in the `pages` folder. The `api` folder contains the API endpoints for the application.

- The `users` folder contains the API endpoints for the user's login and registration.

All the Files are named according to their functionality.As next js uses the file name as the endpoint name and follows the REST API architecture.

## Frontend

The frontend is built using React.js and Next.js. The PostDetails for this apllication is in the `libs` folder.

- The `app` folder contains root layout for the application .

NextJS 13 uses a new routing system. The New folder based routing allows you to create a folder with the name of the page and put all the files related to that page in that folder. This makes the code more organized and easy to maintain.

- The layout.jsx file contains the layout for the application. It contains the header and footer for the application.
- post data components for the application is in the `libs` folder.
- All other directories are name accoriding to their functionality.

- Directory's with page.jsx will has a endpoint with the same name.

The Styling for the application is done using the Tailwind CSS framework. provides a lot of utility classes that can be used to style the application.

I am not a designer so I used the default Tailwind CSS theme for the application.


## How to run the application

- Clone the repository

- Install the dependencies

```bash

git clone git@github.com:lakshmanshankarc/student-management-system.git

```

Now install the dependencies using the following command

```bash
cd student-management-system
npm install
```
This will install all the dependencies for the application.


To Successfully run the application you need to have a MySQL database installed on your system. You can install MySQL on your system using the following command

```bash
sudo apt install mysql-server
```

Now you need to create a database named `CollegeCo` in your MySQL database. You can create the database using the following command

```bash
mysql -u root -p
```
And Run the following command to create the database

```bash
source path/to/sql/student.sql
```