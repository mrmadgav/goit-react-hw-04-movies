import React, { Component } from "react";
import Axios from "axios";
import styles from "./CastContent.module.css";

class CastContent extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ cast: response.data.cast });
  }
  render() {
    return (
      <ul className={styles.castContDiv}>
        {this.state.cast.map((i) => (
          <li key={i.name}>
            {i.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${i.profile_path}`}
                alt={i.name}
                className={styles.castimg}
              ></img>
            ) : (
              <p className={styles.notFoundImg}></p>
            )}

            <p>{i.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default CastContent;
