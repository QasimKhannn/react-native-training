import { getAuth } from "@react-native-firebase/auth"
import Authentication from "./src/auth"
import Home from "./src/screens/home"

const App = () => {
  const auth = getAuth()
  const user = auth.currentUser
  console.log(user)
  return (
    <>
      {user ? (
        <Home />
      ) : (
        <Authentication />
      )}
    </>
  )
}

export default App