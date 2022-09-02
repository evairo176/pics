import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // pake onchange
  // onChangeSearch = (e) => {
  //   this.setState({ term: e.target.value });
  //   this.props.onChange(this.state.term);
  // };
  // ini pake submit
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        {/* jika pake onSubmit disini manggil onSubmit={this.onFormSubmit} */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
