import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Components/Home/Question/quesiton';
import LoginScreen from '../Components/Login/login';
import { NavigationContainer } from '@react-navigation/native';
import AnswerScreen from '../Components/Home/Question/answer';
import SettingsScreen from '../Components/Settings/settings';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Answer" component={AnswerScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;