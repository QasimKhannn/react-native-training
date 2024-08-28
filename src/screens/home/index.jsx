import { Button, ScrollView, View } from "react-native"
import ScreenWrapper from "../../components/screen-wrapper"
import Counter from "./components/counter"
import ScreenHeading from "../../components/screen-heading"
import Icons from "react-native-vector-icons/AntDesign"

const Home = ({ navigation }) => {

    const handleNavigation = () => {
        navigation.navigate("AboutUs")
    }

    return (
        <ScreenWrapper>
            <View style={{ backgroundColor: "black", flex: 0, justifyContent: "center", alignItems: "center" }}>
                <Icons name="home" size={40} color={"white"} />
            </View>
            <ScrollView>
                <ScreenHeading label={"Home Screen"} />
                <Counter />
                <Button title="Go to About Us!" onPress={handleNavigation} />
            </ScrollView>
        </ScreenWrapper>
    )
}


export default Home