import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  subscriptionReducer,
  userReducer,
} from './reducers/userReducer';
import { otherReducer } from './reducers/otherReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    subscription: subscriptionReducer,
    other: otherReducer,
    course: courseReducer,
    admin: adminReducer,
  },
});
export default store;
export const server = 'http://localhost:5000/api/v1';
