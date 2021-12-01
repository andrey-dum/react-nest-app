import { combineReducers } from "redux";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
  company: AppReducer,
  //other reducers come here...
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState =  ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof rootReducer.dispatch

export default rootReducer;
