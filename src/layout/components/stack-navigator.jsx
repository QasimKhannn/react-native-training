import { createStackNavigator } from "@react-navigation/stack"
import Home from "../../screens/home"
import AboutUs from "../../screens/about-us"

const Stack = createStackNavigator()
const StackRoutes = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
        </Stack.Navigator>
    )
}

export default StackRoutes