import { Component } from "react";

import './search-box-styles.css'

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <div>
        <input
          type="search"
          className={`search-box ${className}`}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
