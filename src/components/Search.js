import React from "react";

const Search = ({ repos, onSearchTextChanged, onSearch, searchText }) => {

  const repoLinks =
    <ul>
      {repos.map(repo => <li key={ repo.id }><a href={ repo.url }>{ repo.name }</a></li>)}
    </ul>

  return (
    <div>
      <p>Enter a repo name to find all repos: </p>
      <hr />
      <input onChange={event => onSearchTextChanged(event.target.value)}/>
      <button onClick={() => onSearch(searchText)}>Search Github</button>

      <div>{repoLinks}</div>
     </div>
  )
}

export default Search;
