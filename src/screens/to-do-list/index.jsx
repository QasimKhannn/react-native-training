import ScreenWrapper from "../../components/screen-wrapper"
import ScreenHeading from "../../components/screen-heading"
import { ScrollView, StyleSheet, Text, View } from "react-native"

const ToDoList = () => {
    return (
        <ScreenWrapper bgColor={"black"}>
            <ScrollView>
                <ScreenHeading label={"My To Do List"} />
                <View style={styles.box}>
                    <Text style={styles.text}>Without Flex 1</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text}>Without Flex 1</Text>
                </View>
            </ScrollView>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 600,
        width: 400,
        backgroundColor: "brown"
    },
    box2: {
        height: 600,
        width: 400,
        backgroundColor: "orange"
    },
    text: {
        fontSize: 50
    }
})
export default ToDoList