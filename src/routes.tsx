import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {HomeScreen} from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

export const QuickstartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Quickstart.Home"
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
    </Stack.Navigator>
  )
}
