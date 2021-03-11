import React, { Component } from "react";
import Axios from "axios";
import styles from "./SearchMoviesForm.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const SearchList = React.lazy(
  () =>
    import(
      "../../components/SearchList/SearchList"
    ) /* webpackChunkName: "SearchList" */
);
const Loader = React.lazy(
  () => import("react-loader-spinner") /* webpackChunkName: "Loader" */
);

class SearchMoviesForm extends Component {
  state = {
    search: [],
    currentSearch: "",
    loadContentFlag: 0,
    loader: false,
    query: "",
  };

  change = (e) => {
    this.setState({ currentSearch: e.target.value });
  };

  componentDidMount() {
    this.setState({
      loadContentFlag: 1,
      currentSearch: this.props.history.location.search.substr(6),
    });
    if (this.props.history.location.search.length > 0) {
      this.makeSearch(this.props.history.location.search.substr(6));
    }
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ loadContentFlag: 1, loader: true });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `name=${this.state.currentSearch}`,
    });
    const query = this.state.currentSearch;
    this.makeSearch(query);
    this.setState({ query });
  };

  makeSearch = (query) => {
    setTimeout(() => {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=cae2ba5bb4d635ff4cc14f2582722050&query=${query}`,
        { credentials: "include" }
      ).then((response) => this.setState({ search: response.data.results }));
    }, 1400);
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

        {this.state.loader && (
          <div className="">
            <span>You results will be here</span>
          </div>
        )}
        {this.state.loadContentFlag === 1 && (
          <React.Suspense fallback={<></>}>
            <SearchList
              search={this.state.search}
              from={`${
                this.props.location.pathname
              }?name=${this.props.history.location.search.substr(6)}`}
            />
          </React.Suspense>
        )}
        {this.state.loader && (
          <div className="">
            <React.Suspense fallback={<></>}>
              <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={900}
              />
            </React.Suspense>
          </div>
        )}
      </>
    );
  }
}

export default SearchMoviesForm;
