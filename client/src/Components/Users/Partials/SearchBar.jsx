const SearchBar = () =>{
    return(
        <div className="searchBar p-3">
            <input type="text" className="form-control searchInuput" placeholder="search" />
            <button className="btn btn-sm searchBtn">Search</button>
        </div>
    )
}

export default SearchBar