# Barebones application utilizing Firebase Authentication

## Overview
Use case agnostic application containing a login and signup feature that includes: 
* email authentication through Firebase 
* login required private routes in React 
* express server with basic user table schema in PostgreSQL

## Installation 
#### _Prior to installation, sign up for a free account through Firebase and set up Authentication._

1. Fork and clone repo
2. cd into firebase_auth/client
    * npm install
3. create .env file in client directory
    * Go to https://console.firebase.google.com under Project Settings > General > Your Apps, copy the section that reads:
        <img width="297" alt="Screen Shot 2022-11-12 at 7 35 53 PM" src="https://user-images.githubusercontent.com/12160369/201504359-998ceef1-fdde-49c1-8586-9962493341f4.png">
        * Create environment variables in .env and fill in credentials from Firebase
            * See firebase_auth/client/src/firebase.js for required environment variables
                  <img width="469" alt="Screen Shot 2022-11-12 at 7 42 40 PM" src="https://user-images.githubusercontent.com/12160369/201504533-b4f5ca4f-248c-4e34-8223-b8ca0afa53cf.png">
4. cd into firebase_auth/server
    * npm install
5. create .env file in server directory
    * add environment variables for Postgres
        * see server/db/db.js for required variables
            * <img width="165" alt="Screen Shot 2022-11-12 at 7 46 54 PM" src="https://user-images.githubusercontent.com/12160369/201504638-e29362e4-0d4e-469b-99fb-d22af2774909.png">   
6. In two terminals, run **npm run start** and **npm run dev**
