import React, { Component } from "react";
import Axios from "axios";
import styles from "./ReviewContent.module.css";

export default class ReviewContent extends Component {
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
        {this.state.reviews.length !== 0 ? (
          this.state.reviews.map(
            (i, index) =>
              [index] <= 5 && (
                <li key={i.author} className={styles.reviewsItem}>
                  <div className={styles.reviewsTitlesWrapper}>
                    <span className={styles.author}>Nickname: {i.author}</span>
                    <span className={styles.author}>
                      Date: {i.created_at.substr(0, 10)}
                    </span>
                  </div>
                  <p>{i.content.split("/(.{0,37}[s])/gi")}</p>
                        </li>
              )
          )
        ) : (
          <div>
            <span>There aren`t any reviews...write the first</span>
          </div>
        )}
      </ul>
    );
  }
}
