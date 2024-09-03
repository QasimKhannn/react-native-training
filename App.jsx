import './gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { DrawerRoutes } from './src/layout';
import SplashScreen from './src/screens/splash-screen';
import { useEffect, useState } from 'react';
import CounterProvider from './src/screens/home/components/counter';



const App = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const splash = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearInterval(splash)
  }, [])

  return (
    <NavigationContainer>
      {visible ? (
        <SplashScreen />
      ) : (
        <CounterProvider>
          <DrawerRoutes />
        </CounterProvider>
      )
      }
    </NavigationContainer >

  )
}

export default App