import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';

class App extends Component {

  constructor(props){
    super(props);

    console.log('Khởi tạo hệ thống ');

    // dữ liệu Movies
    const movies = [
      {id: 0, poster_src : "https://ia.media-imdb.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_UY209_CR0,0,140,209_AL_.jpg", title: "Phim so 1", overview:"overview phim 1"},
      {id: 1, poster_src : "https://ia.media-imdb.com/images/M/MV5BMWZkYTllMjctM2E0ZS00NTNjLWE2YjQtODY4YWZjMDJiODVhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UY209_CR0,0,140,209_AL_.jpg", title: "Phim so 2", overview:"overview phim 2"},
      {id: 2, poster_src : "https://ia.media-imdb.com/images/M/MV5BMTc5MjA1Njk1M15BMl5BanBnXkFtZTgwMDI5ODkxNTM@._V1_UY209_CR0,0,140,209_AL_.jpg", title: "Phim so 3", overview:"overview phim 3"},
    ]

    var movieRows =[];
    movies.forEach( (movie) => {

      const movieRow = <MovieRow movie={movie}/>     
      

      movieRows.push(movieRow)
    });

    this.state = {
      rows: movieRows
    }
  }

  render() {
    return (
      <div>
        <table style= {{
            backgroundColor: '#000',
            display: 'block',
            color: '#fff',
            fontSize : 30,
            paddingLeft: 16
          }}>
          <tbody>
            <tr>
              <td><img width="45" src="movie-logo.svg"/></td>
              <td>MoviesDB Search</td>
            </tr>
          </tbody>
        </table>

        <input style={{
            fontSize: 24,
            display : 'block',
            width : '99%',
            paddingBottom : 8,
            paddingTop : 8,
            paddingLeft : 16
          }
        }
        placeholder="Nhập từ khóa" 
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
