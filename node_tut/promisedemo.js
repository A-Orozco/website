// promise based http client for js
const axios = require('axios');

/*
A basic use of axios.get()
semds http request to the api, returns promise
-will not fulfill promise if status code indicates error;  no need for validation

axios.get('https://ghibliapi.herokuapp.com/films');
*/

//chaining the axios promise to fs
const fs = require('fs').promises;

axios.get('https://ghibliapi.herokuapp.com/films')
    .then( (response) => {
        console.log("success retrieval");
        response.data.forEach( movie =>{
            console.log(`${movie['title']}, ${movie['release_date']}`);
        });

        //creating the csv file
        let movieList = '';
        response.data.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
            });
        return fs.writeFile('promiseMovies.csv', movieList);
    })

    .then( () => {
        console.log("this is a chained promise, like chaining clalbacks")
    })

    .catch ((error) => {
        console.error(`Could not save the Ghibli movies to a file: ${error}

    });

    