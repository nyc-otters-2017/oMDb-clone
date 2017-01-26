class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movie: ""
    }
    this.onMovieSubmit = this.onMovieSubmit.bind(this)
  }

  onMovieSubmit(searchParams) {
    $.ajax({
      url: 'http://www.omdbapi.com/?t='+ searchParams
    }).success(function(movie) {
      this.setState({
        movie
      })
      console.log(this.state.movie)
    }.bind(this))
  }

  render() {
    return(
      <div>
        <h1>Hello World!</h1>
        <Search
          onMovieSubmit = {this.onMovieSubmit}
        />
        <MovieData
          key={this.state.movie.imdbID}
          data={this.state.movie}
        />
      </div>
    )
  }
}
