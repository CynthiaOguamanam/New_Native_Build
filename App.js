import { SafeAreaView } from 'react-native';
import React from 'react'
import {useFonts} from 'expo-font'
import Home from './components/home'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default (props) => {
  const [fontLoads] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf")
  })
  if(!fontLoads){
    return null;
  }
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={<Home/>} />
      </Stack.Navigator>
    </NavigationContainer>
    
    )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
