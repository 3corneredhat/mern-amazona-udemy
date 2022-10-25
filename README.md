# MERN Amazona - Udemy Course by Bassir Jafarzadeh

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
6. Add routing (a web page for each product)
   1. npm i react-router-dom
   2. crate route for home screen
   3. create router for product screen
7. Create a Node.js server (adding a backend API)
   1. run npm init in root foler
   2. Update package.json set type: module
   3. Add.js to imports
   4. npm install express
   5. create server.js
   6. add start commmand as node backend/server.js
   7. require express
   8. create route for / return backend is read. (not sure what this means)
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Product From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
      After completing this lesson, the we need to improve the HomeScreen component so that it supports
      a variety of states such as errors, loading, etc.
9. Manage States By Using Reducer Hooks
   1. define a reducer
   2. update fetch data
   3. get state from useReducer
10. Apply React Bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create rating component
    2. create product component
    3. Use rating component in product component
12. Create Product Details Screen
    1. fetch a product from backend
    2. creae 3 columns for image, info, and screen
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
