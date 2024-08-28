import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../../screens/home"
import AboutUs from "../../screens/about-us"
import ToDoList from "../../screens/to-do-list"
import MyForm from "../../screens/form"

const Drawer = createDrawerNavigator()

const DrawerRoutes = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
            <Drawer.Screen name="ToDoList" component={ToDoList} />
            <Drawer.Screen name="MyForm" component={MyForm} />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes