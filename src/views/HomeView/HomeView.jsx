import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styles from "./HomeView.module.css";

class HomeView extends Component {
  state = {
    films: [],
    randomFilm: {},
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ films: response.data.results });
    this.getrandomFilm();
  }
  getrandomFilm = () => {
    const random = Math.floor(Math.random() * this.state.films.length);
    console.log(this.state.films[random]);
    console.log(random);
    this.setState({ randomFilm: this.state.films[random] });
  };
  render() {
    const { randomFilm } = this.state;
    return (
      <div className={styles.homeWrapper}>
        <ul className={styles.weekList}>
          <li>
            <h3>Week Trends:</h3>
          </li>
          {this.state.films.map((i) => (
            <li key={i.id}>
              <Link to={`/movies/${i.id}`}>{i.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${randomFilm.poster_path}`}
            alt={randomFilm.title}
            className={styles.mainPoster}
          ></img>
        </div>
        <div>
          <p className={styles.mainOverview}>{randomFilm.overview}</p>
        </div>
      </div>
    );
  }
}

export default HomeView;
