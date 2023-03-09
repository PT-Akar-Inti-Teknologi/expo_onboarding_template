import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "../../feature/home/config/Navigation";


const Root = createStackNavigator()

const getScreen = () => [
  ...HomeNavigation.getNavigation(Root)
]

const RootNavigation = () => {
  return (
    <Root.Navigator>
      {getScreen()}
    </Root.Navigator>
  )
}

export default RootNavigation;