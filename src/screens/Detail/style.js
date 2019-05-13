import { StyleSheet } from "react-native";

import color from "../../constants/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: color.WHITE
  },
  textInput: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: color.VERY_LIGHT_GREY,
    borderRadius: 8,
    backgroundColor: color.WHITE,
    marginTop: 10,
    marginBottom: 10
  },
  mulitLineTextInput: {
    height: 80
  },
  isCompletedContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  button: {
    height: 44,
    backgroundColor: color.APP_THEME,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 1,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  }
});

export default styles;
