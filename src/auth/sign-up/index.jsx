import { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const auth = getAuth()
    if (auth.currentUser) {
        console.log("Signed In")
    }
    else {
        console.log("Not Signed In")
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            console.log("Registered Successfully!")
        } else {
            console.log("User signed Out")
        }
    });


    const handleRegister = async () => {
        if (!email || !password) {
            return Alert.alert("Please fill in all fields")
        }
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            console.log(email, password)
        } catch (error) {
            console.log("Error ~", error)
        }
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Sign Up 🔐</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"black"} onChangeText={text => setEmail(text)} value={email} />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"black"} onChangeText={text => setPassword(text)} value={password} />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
                    <Text style={styles.button}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "black",
        borderRadius: 10,
        color: "black"
    },
    form: {
        backgroundColor: "white",
        margin: 20,
        borderRadius: 20,
        padding: 40,
        gap: 8,
    },
    button: {
        color: "white",
        textAlign: 'center'
    },
    buttonContainer: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        width: 80,
        alignSelf: "center",
    },
    heading: {
        fontSize: 40,
        color: "white",
        textAlign: "center",
        fontWeight: "700"
    }
})
export default SignUp