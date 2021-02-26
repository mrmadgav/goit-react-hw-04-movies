import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import styles from "./HomeView.module.css";

class HomeView extends Component {
  state = {
    films: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ films: response.data.results });
  }
  render() {
    return (
      <div>
        <h3>In Trends:</h3>
        <ul>
          {this.state.films.map((i) => (
            <li key={i.id}>
              <Link to={`/movies/${i.id}`}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomeView;
