import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Exists")
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Login 🔐</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"black"} onChangeText={text => setEmail(text)} value={email} />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"black"} onChangeText={text => setPassword(text)} value={password} />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                    <Text style={styles.button}>Login</Text>
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
export default SignIn