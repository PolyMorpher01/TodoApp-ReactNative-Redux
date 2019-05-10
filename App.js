import React from "react";
import { createStore } from "redux";
import { MenuProvider } from "react-native-popup-menu";

import NavigationContainer from "./src/route";

const App = () => (
  <MenuProvider>
    <NavigationContainer />
  </MenuProvider>
);

export default App;
