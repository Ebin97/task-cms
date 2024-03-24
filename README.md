**Customer Management System**

This is a web platform where a user can signup and add cutomers under him with  details like name, address, email and phone number.
Functionalities
-Login page
-Signup page
-Create Customer page
-View Customer
-Edit Customer
-Delete Customer
-View All Customer
-Search Customer
-Logout Functionality

## Installation

I have created two folder one for server side(backend) and the other for client side(frontend)
Steps for installation:
-Clone the repo to the local system
**Backend**
-Navigate to backend folder and inside backend folder run the command **npm install/ npm i** on the terminal first to install all the dependancies 
-Make sure you have a mongo db version 5,6 installed in your system, some feauture didn't work in the latest version
-After successfull completion of the above steps start the backend by using the command **npm run dev**
-After all the above process get completed if the backend is working fine you will get a success message:
"server listening on port: 8000
connection to database established..."

**Frontend**
-After cloning the repository navigate to frontend folder and run the command **npm install** which will install all the dependancies require for the running of the react application
-After the successfull instalation of npm we can now start the project by giving the command **npm start** in the terminal and our project will start in localhost 3000

## Usage

-While starting the project you will be in the home page were the system ask the user to login to the site.
-If the user has an account he/she can directly login to the site
-If the user has no account, that is a new user need to go to registration page and give the details like name, email and password and register their account
-After successful registraion the user can login to the application
-After successfull login the user is redirected to a page where the user can see the customer present under him/her
-On the same page we have the option to create a customer and also option to view all customers in the nav bar, logout button is also present
-User can create new customers under him/her using the create user button by giving the deatils like name, address, email, phone number.
-User can edit of delete the customers just by navigating to All Customer page and just click on the customer which need to edited or deleted
-A popup window will open with the option to edit or delete customer.

## Contributing
I have used ReactJs for frontend development
NodeJs for backend development
ExpressJs as middleware
MongoDB for database management
Implimented JWT token for session storage
Joi Validater for validation purpose in backend


## Contact

You can contact me on 
ebinkuriakose1997@gmail.com
+971 562051688

