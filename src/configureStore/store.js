import {legacy_createStore as createStore} from "@reduxjs/toolkit";
import {rootReducer} from "../reducers/twitterReducer";

export const store = createStore(rootReducer)