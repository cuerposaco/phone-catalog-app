const initialState = () => ({
  items: [],
  selectedItem: null,
  loading: false,
});

export default function appReducer(state = initialState(), action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.loading,
      };

    case 'GET_PHONES':
      return {
        ...state,
        items: action.items,
      };

    case 'SELECT_PHONE':
      return {
        ...state,
        loading: false,
        selectedItem: action.selectedPhone,
      };

    case 'RESET_SELECT_PHONE':
      return {
        ...state,
        selectedItem: null,
      };

    default:
      return state;
  }
}
