import React from 'react'
const Search = ({placeholder, onChange}) => {
    return (
<form className="mt-4 mb-4 mx-auto" style={{width: "50rem"}}>
<div className="form-group text-center">
<input type="search" className="form-control mt-4 mb-4" id="search" placeholder={placeholder} onChange={onChange}/>
<button type="submit" className="btn btn-primary">Search</button>
</div>
</form>
    )
}
export default Search;
