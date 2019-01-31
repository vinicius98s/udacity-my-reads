This project was made to [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

Basically, this app has 3 shelves (currently reading, want to read and read) that holds some books and you may change them from shelf to shelf. You'll also find a path called /`search` to add more books to your shelves.

## Cloning the repository
On terminal, go to the desired folder to clone this repository.
### `git clone https://github.com/vinicius98s/udacity-my-reads.git`


## Installing dependencies
You can install all project's dependencies with:
### `npm install` or `yarn install`


## Running our application
As soon as you type:
### `npm start` or `yarn start`
Your browser will open with the following url: http://localhost:3000

## Routes
Our app counts with a route for each shelf and one for adding books: <br>
http://localhost:3000/search<br>
http://localhost:3000/want-to-read<br>
http://localhost:3000/currently-reading<br>
http://localhost:3000/read<br>

## Fetching books

All books are fetched from the [BooksAPI.js](https://github.com/vinicius98s/udacity-my-reads/blob/master/src/BooksAPI.js) file that is provided from the [starter project template](https://github.com/udacity/reactnd-project-myreads-starter) and it has these [methods](https://github.com/udacity/reactnd-project-myreads-starter#backend-server)
