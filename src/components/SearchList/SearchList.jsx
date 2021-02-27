import React, { Component } from "react";
import SearchItem from "../SearchItem/SearchItem";
import styles from "./SearchList.module.css";
import { v4 as uuidv4 } from "uuid";

export default class SearchList extends Component {
  render() {
    return (
      <>
        <p className={styles.searchResultTitle}>
          Search Results ({this.props.search.length})
        </p>
        <ul className={styles.SearchList}>
          {this.props.search.map((item) => (
            <SearchItem item={item} key={uuidv4()} from={this.props.from} />
          ))}
        </ul>
      </>
    );
  }
}
