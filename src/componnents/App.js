import React from "react";
import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearcBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    // versi bikin folder api
    // const respone = await unsplash.get("/search/photos", {
    //   params: {
    //     query: term,
    //   },
    // tanpa bikin folder api
    const respone = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
        per_page: 20,
      },
      headers: {
        Authorization: "Client-ID y0ZZk-Vwv7_hvF5JHAxAF7jPcZM_aOd1hCKrt_gDszM",
      },
    });
    // console.log(respone.data.results);
    this.setState({
      images: respone.data.results,
    });
    // .then((respone) => {
    //   console.log(respone.data.total);
    // });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
