class MovieData extends React.Component {
  render() {
    return(
      <section>
        <article className="">
          <img src={this.props.data.Poster} alt="" />
        </article>
      </section>
    )
  }
}
