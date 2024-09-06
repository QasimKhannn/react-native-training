import { getAuth } from "@react-native-firebase/auth"
import { Button, Text, View } from "react-native"

const Home = () => {

    const auth = getAuth()
    const handleLogout = async () => {
        await auth.signOut()
    }
    return (
        <View>
            <Text>This is Home Page!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    )
}

export default Home