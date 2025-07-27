# Assignment1
expressJS-microservice
npm init -y, npm install express uuid, npm install --save-dev nodemon jest supertest
In app.js I have the express Logic sitting
then in package.json edit the scripts as "scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
we need to do this as it’s just like saying:
“I want npm start to mean: run my app normally”
“I want npm run dev to mean: run it with auto-reloading (dev mode)”
Now in terminal in root dir run npm run dev to see the code working 

Create controllers & routes dir's
We created dummy user data in the controller and exported a function to return it.

CRUD 
1) This function was used in the router file as a handler for the /users GET route.
Finally, this router was imported and mounted in app.js, so we can see the /users response in the browser.
Untill here we have / method and /users method.


2) Use thunderclient to send new data as a POST(add new user) method - it is a plug in VS code.

Actually I changed my course of action in mid way as fetching the and updating data is not a good way to do this way
So I added Postgres DB so it is capabale of getting current users & adding new users. So install Npm install pg(postgres)

3) /users/id method to get a particular id from all users

4) http://localhost:3000/users/2 PUT method in Thunderbolt 
 it will update our users list 

{
  "name": "Sai surya Gorrepati",
  "email": "saisuryagorrepati@gmail.com",
  "age": 35
} 

5) Use Thunder Client or curl:

Thunder Client
Method: DELETE
URL: http://localhost:3000/users/2 (or any valid user ID)


Then We are starting with Unit Test cases for passing sonar stage
Run this -npm install --save-dev jest supertest.
add this to package.json -> "scripts": {
  "test": "jest"
}
create a tests dir and a js file for user.test
then run npm run test 
and for code coverage run npx jest --coverage
