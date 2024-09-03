import { useContext, useEffect, useState } from "react"
import ScreenHeading from "../../components/screen-heading"
import ScreenWrapper from "../../components/screen-wrapper"
import { Text } from "react-native"
import CounterContext from "../../store/counter-context"

const AboutUs = () => {
    const [myData, setMyData] = useState()
    const { count, changeCount } = useContext(CounterContext)


    const handleFetch = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            const jsonData = await data.json()
            setMyData(jsonData)
            console.log(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])



    return (
        <ScreenWrapper>
            <ScreenHeading label={"About Us!"} />
            <Text style={{ fontSize: 50, color: "black", textAlign: "center", fontWeight: "900" }}>{count}</Text>
        </ScreenWrapper>
    )
}

export default AboutUs

