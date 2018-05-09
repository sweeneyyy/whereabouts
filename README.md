# whereabouts

## Technical Requirements
* Have at least 2 models - ideally a user model and one that represents the main functional idea for the app
* Include sign up/log in functionality, with hashed passwords & an authorization flow
* Incorporate at least one API
* Have complete RESTful routes for at least one of your resources with GET, POST, PUT, and DELETE
* Utilize an ORM to create a database table structure and interact with your relationally-stored data
* Include wireframes designed during the planning process
* Have semantically clean HTML and CSS

## Technologies Used
* Node.js
* Express
* PostgreSQL, Sequelize
* jQuery and AJAX
* Bootstrap CSS Framework
* tumblr API

## User Stories
* When you are thinking of ideas for your next travel adventure and would like to create a vision board to get excited and inpsired. The search uses the Tumblr API by tagged posts.
* You already have a trip planned and would like to save ideas, packing lists, reminders in your personal notebooks.

## Approach Taken
Planned out the steps in Trello - labeled by sprint

![trello_sprint1](https://user-images.githubusercontent.com/30785832/34971612-96fdf746-fa30-11e7-9e7d-46395a4bdf9a.jpg)

Created wireframes with draw.io

![wireframe](https://user-images.githubusercontent.com/30785832/34971640-c0460594-fa30-11e7-883f-80db10cc37e9.png)

![wireframe_2](https://user-images.githubusercontent.com/30785832/34972066-e750cea0-fa33-11e7-8d9d-02ad1da15cd9.png)

## Home Page
![homepage_1](https://user-images.githubusercontent.com/30785832/36809444-f5f303e0-1c95-11e8-9c6a-89f806cb7577.png)
![homepage_2](https://user-images.githubusercontent.com/30785832/36809862-35cb043a-1c97-11e8-8e18-598bd81666eb.png)

## Sample Search Page
![search_page](https://user-images.githubusercontent.com/30785832/36809553-37b10dcc-1c96-11e8-85b4-f95039ef77f9.png)

## Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/logout | Logs user out of account
GET | /favorites/all | Displays users saved favorite images
POST | /favorites/search | tumblr API call from user query to view/save images
GET | /favorites/search | Display search results on search page
POST | /favorites | Add a new image to user favorites
GET | /favorites/:id | Display a single user favorite
DELETE | /favorites/:id | Delete an image from user favorites
GET | /notebooks/all | Display all users notebooks
GET | /notebooks/new | Get form to create a new notebook
POST | /notebooks | Create a new notebook in user account
DELETE | /notebooks/:id | Delete a notebook in the user account
GET | /notebooks/:id | Display a single user notebook
GET | /notebooks/edit/:id | Display a single user notebook form to edit
PUT | /notebooks/edit/:id | Edit a user notebook name and/or content

## Next Steps
* Adding ability to add tags to favorite images
* Add option to search the same term again with one click or refresh with new results
* Adjust API call so that duplicate images do not show
* Add link to tumblr blog post along with image for user to access
* Improve styling

## Other Resources Used
* Google fonts
* draw.io
* Trello
