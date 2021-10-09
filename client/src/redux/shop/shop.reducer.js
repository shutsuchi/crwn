import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  };
};

export default shopReducer;