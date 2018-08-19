import { CHANGE_NETWORK_STATUS } from '../actions/network';

const initialState = {
  connected: false,
  hasCheckedStatus: false,
};

const isConnected = status => status.toLowerCase() !== 'none';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NETWORK_STATUS:
      return {
        ...state,
        hasCheckedStatus: true,
        connected: isConnected(action.status),
      };
    default:
      return state;
  }
};

export default reducer;
