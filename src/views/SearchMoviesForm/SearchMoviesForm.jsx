import React, { Component } from "react";
import Axios from "axios";
import styles from "./SearchMoviesForm.module.css";
import SearchList from "../../components/SearchList/SearchList";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class SearchMoviesForm extends Component {
  state = {
    search: [],
    currentSearch: "",
    flag: 1,
    loader: false,
  };


  change = (e) => {
    this.setState({ currentSearch: e.target.value });
  };

  componentDidMount() {
    console.log(this.props.location.search)
      setTimeout(() => {
        Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=cae2ba5bb4d635ff4cc14f2582722050&query=${this.props.location.search}`,
          { credentials: "include" }
        ).then((response) => this.setState({ search: response.data.results }));
      }, 1400);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.location.search != nextProps.location.search) {
      setTimeout(() => {
        Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=cae2ba5bb4d635ff4cc14f2582722050&query=${this.state.currentSearch}`,
          { credentials: "include" }
        ).then((response) => this.setState({ search: response.data.results }));
      }, 1400);
    }
  }
  
  submit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `name=${this.state.currentSearch}`,
    });
  };
  
  render() {
    return (
      <>
        <form className="" onSubmit={this.submit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className=""></span>
          </button>
          <input
            className=""
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search Film"
            onChange={this.change}
            value={this.state.currentSearch}
          />
        </form>

        {this.state.flag === 0 && (
          <div className="">
            <span>You results will be here</span>
          </div>
        )}
          <SearchList
            search={this.state.search}
            from={`${this.props.location.pathname}/?name=${this.state.currentSearch}`}
          />
          <div className="">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={900}
            />
          </div>
      </>
    );
  }
}

export default SearchMoviesForm;
