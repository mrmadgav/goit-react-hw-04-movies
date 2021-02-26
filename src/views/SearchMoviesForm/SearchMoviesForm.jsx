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
    flag: 0,
    loader: false,
  };
  change = (e) => {
    this.setState({ currentSearch: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    this.setState({ flag: 1 });
    setTimeout(() => {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=cae2ba5bb4d635ff4cc14f2582722050&query=${this.state.currentSearch}`,
        { credentials: "include" }
      ).then((response) => this.setState({ search: response.data.results }));
    }, 1400);
  };

  getcurrentImg = (e) => {
    const id = e.target.closest("[id]").id;
    this.setState({
      currentImg: this.state.search.find((i) => i.id === Number(id)),
    });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showmodal }) => ({ showmodal: !showmodal }));
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
        {this.state.flag === 1 && <SearchList search={this.state.search} />}
        {this.state.flag === 1 && (
          <div className="">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={900}
            />
          </div>
        )}
      </>
    );
  }
}

export default SearchMoviesForm;
