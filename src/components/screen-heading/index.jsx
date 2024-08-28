import { StyleSheet, Text } from "react-native"

const ScreenHeading = ({ label }) => {
    return (
        <Text style={styles.label}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 40,
        color: "black",
        fontWeight: "600"
    }
})

export default ScreenHeading