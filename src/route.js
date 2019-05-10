import { createStackNavigator, createAppContainer } from "react-navigation";

import { TodoList, Detail } from "./screens";
import color from "./constants/color";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TodoList
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
