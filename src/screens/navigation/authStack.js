import * as React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Login from '../loginScreen/login/login';
import SignUp from '../signUpScreen/signUp';
import OtpView from '../otpScreen/otp';
import SalonCategorySelection from '../salonCategorySelection/salonCategorySelection';
import ContractScreen from '../ContractScreen/contractScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator 
    initialRouteName="signUp"
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="otpView" component={OtpView} />  
      <Stack.Screen name="salonCategorySelection" component={SalonCategorySelection} /> 
      <Stack.Screen name="contractScreen" component={ContractScreen} />
    </Stack.Navigator>
  );
}
export default AuthStack;