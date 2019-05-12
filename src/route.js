import { createStackNavigator, createAppContainer } from "react-navigation";

import { Home, Detail } from "./screens";
import color from "./constants/color";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Detail: {
      screen: Detail
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: color.APP_THEME
      },
      headerTintColor: color.WHITE,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const NavigationContainer = createAppContainer(AppNavigator);

export default NavigationContainer;
