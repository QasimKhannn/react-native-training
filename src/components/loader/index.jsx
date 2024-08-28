import { Image, StyleSheet, View } from "react-native"

const CustomLoader = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/image-1.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 300,
        width: 300
    }
})

export default CustomLoader