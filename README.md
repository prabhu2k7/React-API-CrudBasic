# React-API-CrudBasic


STEPS  TO RUN THE CODE:

1. download free mysql with workbench / we can do this simple file as storage format
2. create the database 

CREATE DATABASE trainingapp;

3. create table:

CREATE TABLE trainingapp.users
(
id int NOT NULL,
name varchar(255),
cardnumber varchar(255),
limited varchar(255) 
);

4.
create simple springboot api with STS 
i) create a controller which leverage the bean .
ii)create JPA rep and connect with your created table
iii)Create two method in controller one to pull all the data and another is save the bean

5. create simple react app and install all the required through npm install and npm start.. 
ii) layout simple call from app.js to redirect to layout table to render data
iii) create simple text fields and in form and post the form into API created for save. 
iii)once click f5 the data will be loaded from the API to React UI
iv) if you add the data then json will send to save method to api and once you got the response refresh a page which calls the whole data method.
