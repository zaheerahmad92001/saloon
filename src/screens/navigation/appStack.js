// In App.js in a new project

import * as React from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import AppIntro from '../appIntroScreen/appIntro';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';
import AuthStack from './authStack';
import AccessAbilitySettings from '../accessAbilitySettings/accessAbilitySettings';
import AccessAbility from '../accessAbilitScreen/accessAbilityScreen';
import OtpView from '../otpScreen/otp';
import EditProfile from '../editProfile/editProfile';
import ReviewScreen from '../reviewScreen/review';
import Bookings from '../bookingScreen/booking';
import SavedCard from '../cardScreen/savedCard/saveCard';
import AddCard from '../cardScreen/addCard/addCard';
import InvoiceDetail from '../invoiceScreen/invoiceDetail/invoiceDetail';
import InvoiceList from '../invoiceScreen/invoiceList/invoiceList';
import Complaints from '../complaintsScreens/complaints';
import AddComplaint from '../addComplaint/addComplaint';
import ComplaintDetail from '../complaintDetail/complaintDetail';
import Requests from '../requestsScreen/requests';
import Addrequest from '../addRequest/addRequest';
import RequestDetail from '../requestDetail/requestDetail';
import Settings from '../settingScreen/settings';
import Chat from '../chatView/chatView';
import Language from '../languageScreen/language';
import NotificationSetting from '../notificationSettingsScreen/notificationSetting';
import ChangePassword from '../changePasswordScreen/changePassword';
import PrivacyPolicy from '../privacyPolicyScreen/privacyPolicy';
import TermCondition from '../termConditionScreen/termCondition';
import DeleteAccount from '../deleteAccountScreen/deleteAccount';
import Support from '../supportScreen';
import Payouts from '../payout/payout';
import SuccessScreen from '../successMessageScreen/succesScreen';
import SalonPage from '../salonPage/salonPage';
import ProfileScreen from '../profileScreen/profile';
import SearchScreen from '../searchScreen/search/search';
import Professionals from '../professionals/professionals';
import AddProfessional from '../addProfessional/addProfessional';
import ProfessionalSchedule from '../addProfessionalSchedule/addProfessionalSchedule';
import EditProfessionalSchedule from '../editProfessional/editProfessional';
import ServiceReport from '../serviceReport/serviceReport';
import WorkingHours from '../WorkingHours/WorkingHours';
import StatisticsScreen from '../statisticsScreen/statistics';
import ProfessionalReport from '../professionalReport/professionalReport';
import ServiceManagment from '../serviceManagement/serviceManagement';
import AddNewServiceScreen from '../AddNewService/addNewService';
import SubServiceListScreen from '../subServiceList/subServicelist';
import RatingAndReview from '../ratingAndReviewScreen/ratingAndReview';
import AvailableTimeSlot from '../availableTimeSlotScreen/availableTimeSlot';
import OrderDetail from '../bookingDetailScreen/BookingDetail';
import PromotionScreen from '../Promotion/PromotionScreen';
import AddPromotionScreen from '../PromotionAdd/PromotionAdd';
import EditPromotionScreen from '../EditPromotion/EditPromotion';
import OffDays from '../OffDays/OffDays';
import SecurityScreen from '../securityScreen/security';
import CommissionScreen from '../Commission/commission';
import AssignSubServiceListScreen from '../assingServiceScreen/assignServiceScreen';
import SingleProfessionalProfile from '../SingleProfessionalProfile/singleProfessionalProfile';
import EditSingleProfessionalProfile from '../editSingleProfessionalProfile/editSingleProfessionalProfile';
import ProfessionalBookings from '../professionalBookingScreen/ProfessionalBooking';

import useAppStatus from '../../hooks/useAppStatus';

import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const IntroStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="appIntro" component={AppIntro} />
    </Stack.Navigator>
  );
};

function AppStack() {
  const navigation = useNavigation();
  const {isFirstLaunch, user} = useAppStatus();
  const appIntroCompleted = useSelector((state)=>state.auth.appIntroCompleted)
  const [initialRouteName, setInitialRoute] = React.useState(undefined);


  useEffect(() => {
    if(isFirstLaunch !== null){
    let initialRoute = 'introStack';
    if (isFirstLaunch) {
      initialRoute = 'introStack';
    } else if (!isFirstLaunch && !user) {
      console.log('inside the else if');
      initialRoute = 'authStack';
    } else if (user) {
      initialRoute = 'BottomStack';
    }
    console.log('initial Route', initialRoute);
    console.log('!isFirstLaunch', isFirstLaunch);
    setInitialRoute(initialRoute);
    // navigation.dispatch(StackActions.replace(initialRoute));

    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }
  }, [initialRouteName, isFirstLaunch, user, navigation ,appIntroCompleted]);

  if (!initialRouteName) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="black" size={'small'} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>

      {user && (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomStack" component={BottomStack} />
          <Stack.Screen name="profileScreen" component={ProfileScreen} />
          <Stack.Screen name="editProfile" component={EditProfile} />
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="review" component={ReviewScreen} />
          <Stack.Screen name="ratingAndReview" component={RatingAndReview} />
          <Stack.Screen name="booking" component={Bookings} />
          <Stack.Screen name="chat" component={Chat} />
          <Stack.Screen
            name="notificationSetting"
            component={NotificationSetting}
          />
          <Stack.Screen name="changePassword" component={ChangePassword} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="salonPage" component={SalonPage} />
          <Stack.Screen name="invoiceList" component={InvoiceList} />
          <Stack.Screen name="invoiceDetail" component={InvoiceDetail} />
          <Stack.Screen
            name="notificationStack"
            component={NotificationStack}
          />
          <Stack.Screen name="successScreen" component={SuccessScreen} />
          <Stack.Screen
            name="accessAbilitySettings"
            component={AccessAbilitySettings}
          />
          <Stack.Screen name="accessAbility" component={AccessAbility} />
          <Stack.Screen name="offDays" component={OffDays} />
          <Stack.Screen name="language" component={Language} />
          <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="termsCondition" component={TermCondition} />
          <Stack.Screen name="security" component={SecurityScreen} />
          <Stack.Screen name="customerSupport" component={Support} />
          <Stack.Screen name={'verifyIdentity'} component={OtpView} />
          <Stack.Screen name="payout" component={Payouts} />
          <Stack.Screen name="complaints" component={Complaints} />
          <Stack.Screen name="addComplaint" component={AddComplaint} />
          <Stack.Screen name="complaintDetail" component={ComplaintDetail} />
          <Stack.Screen name="requests" component={Requests} />
          <Stack.Screen name="addRequest" component={Addrequest} />
          <Stack.Screen name="requestDetail" component={RequestDetail} />
          <Stack.Screen name="workingHours" component={WorkingHours} />
          <Stack.Screen name="serviceManagment" component={ServiceManagment} />
          <Stack.Screen
            name="addNewServiceScreen"
            component={AddNewServiceScreen}
          />
          <Stack.Screen
            name="subServiceList"
            component={SubServiceListScreen}
          />
          <Stack.Screen
            name="assignSubServiceListScreen"
            component={AssignSubServiceListScreen}
          />
          <Stack.Screen name="professionals" component={Professionals} />
          <Stack.Screen name="addProfessional" component={AddProfessional} />
          <Stack.Screen
            name="professionalSchedule"
            component={ProfessionalSchedule}
          />
          <Stack.Screen
            name="editProfessionalSchedule"
            component={EditProfessionalSchedule}
          />
          <Stack.Screen name="serviceReport" component={ServiceReport} />
          <Stack.Screen name="statScreen" component={StatisticsScreen} />
          <Stack.Screen
            name="ProfessionalService"
            component={ProfessionalReport}
          />
          <Stack.Screen name="commission" component={CommissionScreen} />

          <Stack.Screen name="addCard" component={AddCard} />
          <Stack.Screen name="savedCard" component={SavedCard} />
          <Stack.Screen name="deleteAccount" component={DeleteAccount} />

          <Stack.Screen
            name="availableTimeSlot"
            component={AvailableTimeSlot}
          />
          <Stack.Screen name="orderDetail" component={OrderDetail} />
          <Stack.Screen name="promotionScreen" component={PromotionScreen} />
          <Stack.Screen
            name="addPromotionScreen"
            component={AddPromotionScreen}
          />
          <Stack.Screen
            name="editPromotionScreen"
            component={EditPromotionScreen}
          />
          <Stack.Screen
            name="singleProfessionalProfile"
            component={SingleProfessionalProfile}
          />
          <Stack.Screen
            name="editSingleProfessionalProfile"
            component={EditSingleProfessionalProfile}
          />
          <Stack.Screen
            name="professionalBookings"
            component={ProfessionalBookings}
          />
        </Stack.Group>
      )}

      {initialRouteName === 'introStack' && (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="introStack" component={IntroStack} />
        </Stack.Group>
      )}
      {!user && (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="authStack" component={AuthStack} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
export default AppStack;
