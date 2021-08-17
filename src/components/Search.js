import React from 'react'
import '../pages/Home.css'
const Search = ({placeholder, onChange}) => {
    return (
<form className="mt-4 mb-4 mx-auto">
<div className="container1">
<input
  id="searchBar"
  className="searchbar"
  type="text"
  placeholder="Search"
  onChange={onChange}
/>
<a id="btnSearch" className="btn-search">
  <i className="fa fa-search"></i>
</a>
</div>
</form>
    )
}
export default Search;
