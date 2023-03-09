import { TypedNavigator } from "@react-navigation/core"
import Home from "../screens/Home"
import { HomeScreens } from "./Screens"

const getNavigation = (Root: TypedNavigator<any, any, any, any, any>) => {
  return [
    <Root.Screen
      name={HomeScreens.HOME.KEY}
      component={Home}
      key={HomeScreens.HOME.KEY}
      options={{
        title: HomeScreens.HOME.TITLE,
        headerShown: false
      }}
    />
  ]
}

const HomeNavigation = {
  getNavigation
}

export default HomeNavigation