import { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Counter = () => {
    let [second, setSecond] = useState(0)
    let [minute, setMinute] = useState(0)
    let [hour, setHour] = useState(0)

    useEffect(() => {
        setTimeout(() => { setSecond(second + 1) }, 2000);
    });

    // let [count, setCount] = useState(0)
    // //use effect 
    // useEffect(() => {
    //     //setInterval()
    //     console.log("Test")
    //     let interval = setInterval(() => { setCount(count + 1) }, 1000);
    //     return () => clearInterval(interval);
    // }, [count])


    return (
        <View styles={styles.main}>
            <View styles={styles.display}>
                <Text style={styles.count}>{minute}:{second}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        border: 5,
        borderColor: "red"
    },
    display: {
        height: 300,
        width: 300,
        backgroundColor: "black"
    },
    controls: {
        height: 150,
        width: 300,
        backgroundColor: "black"
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 15,
        margin: 12
    },
    count: {
        fontSize: 50,
        fontWeight: "900",
        color: "black"
    }
})

export default Counter