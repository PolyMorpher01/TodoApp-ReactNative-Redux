import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";

import NavigationContainer from "./src/route";
import rootReducer from "./src/redux/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <MenuProvider>
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  </MenuProvider>
);

export default App;
