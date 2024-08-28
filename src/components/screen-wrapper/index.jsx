import { StyleSheet, View } from "react-native"

const ScreenWrapper = ({ children, bgColor = '#87faeb' }) => {
    return (
        <View style={[styles.screenWrapper, { backgroundColor: bgColor }]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        justifyContent: "center",
    }
})

export default ScreenWrapper