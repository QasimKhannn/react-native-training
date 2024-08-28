import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../../screens/home"
import AboutUs from "../../screens/about-us"

const Stack = createNativeStackNavigator()

const NativeStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
        </Stack.Navigator>
    )
}

export default NativeStack