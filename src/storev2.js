// import { applyMiddleware, combineReducers, createStore } from "redux";
// import accountReducer from "./features/accounts/accountSlice";
// import customerReducer from "./features/customers/customerSlice";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
