import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootNavigation from "./config/RootNavigation";
import { RootStore } from "./store/root-store/RootStore";

const MainApp = () => {
  return (
    <Provider store={RootStore}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default MainApp;