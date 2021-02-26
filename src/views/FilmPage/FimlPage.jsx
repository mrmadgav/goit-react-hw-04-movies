import React, { Component } from "react";
import Axios from "axios";
import styles from "./FilmPage.module.css";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import BackBtn from "../../components/BackBtn/BackBtn";

class FilmPage extends Component {
  state = {
    films: {},
    genres: "",
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.filmId}?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ films: response.data });
    const genres = this.state.films.genres.map((i) => i.name).join(", ");
    this.setState({ genres: genres });
  }
  render() {
    return (
      <div>
        <BackBtn props={this.props} />
        <div className={styles.filmCard}>
          <div className={styles.posterDiv}>
            <img
              className={styles.filmPoster}
              src={`https://image.tmdb.org/t/p/w500${this.state.films.backdrop_path}`}
              alt={this.state.films.title}
            />
          </div>
          <div>
            <h2 className={styles.filmtitle}>{this.state.films.title}</h2>
            <p>
              <span className={styles.undertitles}>Overview:</span>{" "}
            </p>
            <p className={styles.overview}>{this.state.films.overview}</p>

            <p>
              <span className={styles.undertitles}>Genres: </span>
            </p>
            {this.state.genres}
          </div>
        </div>
        <div className={styles.additionals}>
          <span className={styles.undertitles}>Additional Information</span>
          <div className={styles.filmPageAddNav}>
            <Cast id={this.state.films.id} />
            <Reviews id={this.state.films.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default FilmPage;
