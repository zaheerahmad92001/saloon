import * as React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Notifications from '../notifications/notification/notifications';
import NotificationDetail from '../notifications/notificationDetail/notificationDetail';


const Stack = createNativeStackNavigator();

function NotificationStack() {
  return (
    <Stack.Navigator 
    initialRouteName='notifications'
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="notifications" component={Notifications} />
      <Stack.Screen name="notificationDetail" component={NotificationDetail} />
    </Stack.Navigator>
  );
}
export default NotificationStack;