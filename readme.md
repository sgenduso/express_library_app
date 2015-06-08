# Express Library!

### Task

For the weekend, we'd like you to build an application that has full CRUD on books. You should use an array as your way of storing book objects and each book should have a title, author and year. You should be using RESTful routing and ensure that you have a catch-all route for 404 errors.

### Getting Started

- make a folder for your project
- create an app.js file
- add a package json using the `npm init` command
- create a `.gitignore` file and make sure `node_modules` are not tracked by git
- initialize a git repository and make your first commit
- make sure you have a `views` folder for your application
- Start in your app.js by including the proper dependencies and middleware 

### Bonus

- if you examine all of your views, you will see that you are repeating yourself, research what partials are in express and how to include them - use partials to refactor and clean up your code.
- add an additional route that allows the user to sort all of the books alphabetically

### Super Bonus

Use AJAX and don't do a full page refresh when adding, updating or deleting books. Research `res.json` so that you can respond using json instead of ejs. Once you are rendering JSON, use AJAX to communicate with your server. 
