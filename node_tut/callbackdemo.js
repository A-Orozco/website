const request = require('request');
const fs = require('fs');

//call request function to make HTTP request
request('https://ghibliapi.herokuapp.com/films' , (error, response, body) => {

    if(error) {
        console.error('Unable to send request to API: ${error.message}');
        return;
    }

    if (response.statusCode != 200) {
        console.error('Expected status 200');
    }

    console.log('Processing');
    movies = JSON.parse(body);
    movies.forEach (movie => {
        console.log(`${ movie['title'] } , ${ movie['release_date'] }`);
    });

    let list = '';
    movies.forEach( movie => {
        list += `${ movie['title'] } , ${ movie['release_date'] }\n`
    });

    fs.writeFile( 'cb_movies.csv', list, (error) => {
        if(error) {
            console.error('cant save file; ${error.message)');
            return;
        }

        console.log('file save success!');
    });


        
});