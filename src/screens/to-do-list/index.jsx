import ScreenWrapper from "../../components/screen-wrapper"
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useContext, useEffect, useState } from "react"
import CounterContext from "../../store/counter-context"

const ToDoList = () => {
    const [toDo, setTodo] = useState()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(true);
    const { count, setCount, changeCount } = useContext(CounterContext)

    const handleSubmit = async () => {
        if (!title || !body) {
            alert("Please fill in all fields")
        }
        else {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const message = await response.json()
            console.log("This is the response ~", message)
        }
    }

    const decrementFunc = () => {
        setCount(count - 1)
    }
    const fetchTodos = async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await data.json()
            setTodo(json)
        } catch (error) {
            console.log("Error is ~ ", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchTodos()
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
            <Text style={styles.text}>{count}</Text>
            <Button title="Change Count" onPress={changeCount} />
            <Button title="Decrement" onPress={decrementFunc} />
            {/* <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Task" placeholderTextColor={"black"} onChangeText={text => setTitle(text)} value={title} />
                <TextInput style={styles.input} placeholder="Body" placeholderTextColor={"black"} onChangeText={text => setBody(text)} value={body} />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View> */}
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: "white",
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
})
export default ToDoList