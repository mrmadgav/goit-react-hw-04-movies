import React, { Component } from "react";
import Axios from "axios";
import styles from "./ReviewContent.module.css";

class ReviewContent extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=cae2ba5bb4d635ff4cc14f2582722050`,
      { credentials: "include" }
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    return (
      <ul>
        {this.state.reviews.map((i) => (
          <li key={i.author} className={styles.reviewsItem}>
            <p className={styles.author}>Nickname: {i.author}</p>
            <p>{i.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ReviewContent;
