import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("HelloRNWebiOSAndroid", () => App);
AppRegistry.runApplication("HelloRNWebiOSAndroid", {
  rootTag: document.getElementById("root")
});
