const initialState = {
  repos: [],
  searchInputted: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_TEXT_CHANGED':
        return {
            ...state,
            searchInputted: action.text
        }
    case 'REPO_SEARCH_COMPLETED':
        return {
            ...state,
            repos: action.repos
        }
    default:
        return state;
  }
};

export default reducer;