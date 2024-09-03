import ScreenWrapper from "../../components/screen-wrapper"
import ScreenHeading from "../../components/screen-heading"
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react"

const ToDoList = () => {
    const [toDo, setTodo] = useState()

    const fetchTodos = async () => {
        console.log("Runing..")
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const json = await data.json()
        setTodo(json)
        console.log('Data in to do state is ', json.length)
    }
    useEffect(() => {
        try {
            fetchTodos()
        } catch (error) {
            console.log("Error ~ ", error)
        } finally {
            console.log("Success!")
        }
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.toDoContainer}>
                <Text style={styles.text}>{item?.id}</Text>
                <Text style={styles.text}>{item?.title}</Text>
                <Text style={styles.text}>{item?.userId}</Text>
                <Text style={styles.text}>{item?.completed.toString()}</Text>
            </View>
        )
    }

    return (
        <ScreenWrapper bgColor={"black"}>
            <Text style={styles.text}>{toDo?.length}</Text>
            <FlatList
                data={toDo}
                renderItem={renderItem}
            />
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        fontWeight: "500"
    },
    toDoContainer: {
        height: 150,
        width: 150,
        backgroundColor: "white",
        margin: 20,
        borderRadius: 30,
        flex: 0,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default ToDoList