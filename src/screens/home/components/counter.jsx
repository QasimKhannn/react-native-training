import { useState } from "react"
import CounterContext from "../../../store/counter-context"
const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const changeCount = () => {
        setCount(count + 1)
    }

    return (
        <CounterContext.Provider value={{ count, changeCount, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider