import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { MenuProvider } from "react-native-popup-menu";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import NavigationContainer from "./src/route";
import rootReducer from "./src/redux/reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MenuProvider>
        <NavigationContainer />
      </MenuProvider>
    </PersistGate>
  </Provider>
);

export default App;
