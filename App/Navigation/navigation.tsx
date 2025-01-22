import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Components/Home/Question/quesiton';
import LoginScreen from '../Components/Login/login';
import { NavigationContainer } from '@react-navigation/native';
import AnswerScreen from '../Components/Home/Question/answer';
import SettingsScreen from '../Components/Settings/settings';
import NotificationSettingsScreen from '../Components/Settings/Notifications/notifications';
import ContactScreen from '../Components/Settings/Contacts/contacts';
import ContactInfoScreen from '../Components/Settings/Contacts/Create/create';
import SubscriptionScreen from '../Components/Settings/Subscription/subscription';


const Stack = createStackNavigator();
// SubscriptionScreen
const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Answer" component={AnswerScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SettingsNavigation" component={NotificationSettingsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Contact" component={ContactScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ContactInfo" component={ContactInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Subscription" component={SubscriptionScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;