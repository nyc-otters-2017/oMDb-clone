class Search extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('I clicked this')
    let textField = this.refs.searchBox

    // $.ajax({
    //   type: 'get',
    //   url: 'http://www.omdbapi.com/?t='+ textField.value.split(' ').join('-')
    // }).success(function(response) {
    //   // this.setState({
    //   //
    //   // })
    // }.bind(this))
    this.props.onMovieSubmit(textField.value.split(' ').join('-'))
    textField.value = ''
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="" action="/movies/search" method="get">
        <input ref="searchBox" type="textfield" name="search[title]" placeholder="Title"/>
        <input type="submit" name="name"  value="Search for Movie"/>
      </form>
    )
  }
}
