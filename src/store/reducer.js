
const initialState = {
    favorites: []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
          return {
            ...state,
            favorites: [...state.favorites, action.payload]
          }
        case 'REMOVE_FAVORITE':
          return {
            ...state,
            favorites: state.favorites.filter(company => company.name !== action.payload.name)
          }
        default:
          return state
      }
    }

export default reducer