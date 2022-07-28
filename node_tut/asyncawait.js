const axios = require('axios');
const fs = require('fs').promises;
async function saveMovies() {

    try {
        // await halts further execution until the request is done
        let response = await axios.get('https://ghibliapi.herokuapp.com/films')
        let movieList = '';
        response.data.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        console.log("above the await write");
        await fs.writeFile('asyncAwaitMovies.csv', movieList);

        } catch (error) {
            console.error('oops:  ${errror}');
        }
  
    

}

saveMovies();