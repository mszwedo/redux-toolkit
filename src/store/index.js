//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

const store = configureStore({
   reducer: {
      counter: counterReducer,
      auth: authReducer
   }
});

export default store;

// const counterReducer = (state = initialState, action) => {
//    if (action.type === 'increment') {
//       return { ...state, counter: state.counter + 1}
//    }
//
//    if (action.type === 'increase') {
//       return {
//          counter: state.counter + action.amount,
//          showCounter: state.showCounter
//       }
//    }
//
//    if (action.type === 'decrement') {
//       return {
//          counter: state.counter - 1,
//          showCounter: state.showCounter
//       };
//    }
//
//    if (action.type === 'toggle') {
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter
//       };
//    }
//
//    return state;
// };

//const store = createStore(counterReducer);

//export default store;