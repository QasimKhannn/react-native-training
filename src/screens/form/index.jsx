import { StyleSheet, TextInput, View, TouchableOpacity, Text, Button, Alert } from "react-native"
import ScreenWrapper from "../../components/screen-wrapper"
import { useState } from "react";

const MyForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidden, setHidden] = useState(true);

    const handleSubmit = () => {
        if (!email || !password) {
            Alert.alert("Please fill all fields!")
        }
        console.log("Email is ~ ", email);
        console.log("Password is ~ ", password);
    }
    return (
        <ScreenWrapper bgColor="white">
            <View style={styles.form}>
                <TextInput keyboardType="email-address" style={styles.input} placeholder="Email" placeholderTextColor={"white"} onChangeText={text => setEmail(text)} value={email} />
                <TextInput secureTextEntry={hidden} style={styles.input} placeholder="Password" placeholderTextColor={"white"} onChangeText={text => setPassword(text)} value={password} />
                <Button title="Show Password" onPress={() => {
                    { hidden ? (setHidden(false)) : (setHidden(true)) }
                }} />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
        borderRadius: 10
    },
    form: {
        backgroundColor: "black",
        margin: 20,
        borderRadius: 20,
        padding: 40,
        gap: 8,
    },
    button: {
        color: "black",
        textAlign: 'center'
    },
    buttonContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        width: 80,
        alignSelf: "center",
    },
})

export default MyForm