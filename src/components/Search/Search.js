import React from 'react'
import { Link } from 'react-router-dom';
import '../../pages/Home.css'
const Search = ({placeholder, onChange}) => {

  

    return (
      <form className="mt-4 mb-4 mx-auto">
      <div className="container1">
{/*
<input
  id="searchBar"
  className="searchbar"
  type="text"
  placeholder="Search"
  onChange={onChange}
/>
<p id="btnSearch" className="btn-search">
  <i className="fa fa-search"></i>
</p>
*/}
<Link to="/search"><button className='btn favBtn'>Search <i className='fa fa-search'></i></button></Link>

</div>
</form>
    )
}
export default Search;
