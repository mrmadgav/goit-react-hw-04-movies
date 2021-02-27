import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styles from "./HomeView.module.css";
import CastModal from "../../components/CastModal/CastModal";

class HomeView extends Component {
  state = {
    films: [],
    randomFilm: {},
    randomCast: [],
    showCastModal: false,
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ films: response.data.results });
    this.getrandomFilm();
    const randomCast = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.randomFilm.id}/credits?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ randomCast: randomCast.data.cast });
  }

  getrandomFilm = () => {
    const random = Math.floor(Math.random() * this.state.films.length);
    this.setState({ randomFilm: this.state.films[random] });
  };

  handleOnMouseOver(e) {
    this.setState({ showCastModal: true });
  }

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
              <Link
                to={{
                  pathname: `/movies/${i.id}`,
                  state: { from: this.props.location },
                }}
              >
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link
            to={{
              pathname: `/movies/${randomFilm.id}`,
              state: { from: this.props.location },
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${randomFilm.poster_path}`}
              alt={randomFilm.title}
              className={styles.mainPoster}
            ></img>
          </Link>
        </div>
        <div>
          <p className={styles.mainOverview}>{randomFilm.overview}</p>
          <p className={styles.starringTitle}>Starring:</p>
          <ul>
            {this.state.randomCast.map(
              (i, index) =>
                [index] <= 5 && (
                  <>
                    <li key={i.name} onMouseEnter={(e) => this.handleOnMouseOver(e)}>
                      {i.name}
                    </li>
                    <CastModal/>
                  </>
                )
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeView;
