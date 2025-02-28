// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppIntro from '../appIntroScreen/appIntro';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';
import AuthStack from './authStack';
import AccessAbilitySettings from '../accessAbilitySettings/accessAbilitySettings';
import AccessAbility from '../accessAbilitScreen/accessAbilityScreen';
import OtpView from '../otpScreen/otp';
import Categories from '../categoriesScreen/categories';
import CategoryListing from '../categoryListing/categoryListing';
import EditProfile from '../editProfile/editProfile';
import ReviewScreen from '../reviewScreen/review';
import Favorites from '../favoritesScreen/favourites';
import Bookings from '../bookingScreen/booking';
import SavedCard from '../cardScreen/savedCard/saveCard';
import AddCard from '../cardScreen/addCard/addCard';
import invoiceDetail from '../invoiceScreen/invoiceDetail/invoiceDetail';
import InvoiceList from '../invoiceScreen/invoiceList/invoiceList';
import Complaints from '../complaintsScreens/complaints';
import AddComplaint from '../addComplaint/addComplaint';
import ComplaintDetail from '../complaintDetail/complaintDetail';
import Requests from '../requestsScreen/requests';
import Addrequest from '../addRequest/addRequest';
import RequestDetail from '../requestDetail/requestDetail' ;

import LoyaltyPoints from '../loyaltyPointsScreen/loyaltyPoints';
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
import SaloonPage from '../saloonPage/saloonPage';
import Location from '../location/location';
import RatingAndReview from '../ratingAndReviewScreen/ratingAndReview';
import AvailableTimeSlot from '../availableTimeSlotScreen/availableTimeSlot';
import OrderDetail from '../bookingDetailScreen/BookingDetail';
import PromotionScreen from '../Promotion/PromotionScreen';
import AddPromotionScreen from '../PromotionAdd/PromotionAdd';
import OffDays from '../OffDays/OffDays';
import SecurityScreen from '../securityScreen/security';
import CommissionScreen from '../Commission/commission';
import EditPromotionScreen from '../EditPromotion/EditPromotion';
import ProfileScreen from '../profileScreen/profile';
import SearchScreen from '../searchScreen/search/search';


const Stack = createNativeStackNavigator();

const IntroStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppIntro" component={AppIntro} />
    </Stack.Navigator>
  );
};


function AppStack() {
  return (
    <Stack.Navigator
    initialRouteName="IntroStack"
    screenOptions={{
        headerShown: false,
      }}>
       <Stack.Screen name="IntroStack" component={IntroStack}/>
       <Stack.Screen name="authStack" component={AuthStack} />
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="profileScreen" component={ProfileScreen}/>
      <Stack.Screen name="editProfile" component={EditProfile}/>
      <Stack.Screen name="search" component={SearchScreen}/>
      <Stack.Screen name="review" component={ReviewScreen}/>
      <Stack.Screen name="booking" component={Bookings}/>
      <Stack.Screen name="chat" component={Chat}/>
      <Stack.Screen name="notificationSetting" component={NotificationSetting}/>
      <Stack.Screen name="changePassword" component={ChangePassword}/>
      <Stack.Screen name="settings" component={Settings}/>
      <Stack.Screen name="saloonPage" component={SaloonPage}/>
      <Stack.Screen name="invoiceDetail" component={invoiceDetail}/>
      <Stack.Screen name="notificationStack" component={NotificationStack} />
      <Stack.Screen name="successScreen" component={SuccessScreen} />
      <Stack.Screen name="accessAbilitySettings" component={AccessAbilitySettings}/>
      <Stack.Screen name="accessAbility" component={AccessAbility}/>
      <Stack.Screen name="offDays" component={OffDays}/>
      <Stack.Screen name="language" component={Language}/>
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy}/>
      <Stack.Screen name="termsCondition" component={TermCondition}/>
      <Stack.Screen name="security" component={SecurityScreen}/>
      <Stack.Screen name="customerSupport" component={Support}/>
      <Stack.Screen name={"verifyIdentity"} component={OtpView}/>
      <Stack.Screen name="payout" component={Payouts}/>
      <Stack.Screen name="complaints" component={Complaints}/>
      <Stack.Screen name="addComplaint" component={AddComplaint}/>
      <Stack.Screen name="complaintDetail" component={ComplaintDetail}/>
      <Stack.Screen name="requests" component={Requests}/>
      <Stack.Screen name="addRequest" component={Addrequest}/>
      <Stack.Screen name="requestDetail" component={RequestDetail}/>




      <Stack.Screen name="location" component={Location}/>
      <Stack.Screen name="categories" component={Categories}/>
      <Stack.Screen name="categoryListing" component={CategoryListing}/>
      <Stack.Screen name="favorites" component={Favorites} />
      <Stack.Screen name="addCard" component={AddCard}/>
      <Stack.Screen name="savedCard" component={SavedCard}/>
      <Stack.Screen name="invoiceList" component={InvoiceList}/>
      <Stack.Screen name="loyaltyPoints" component={LoyaltyPoints}/>
      <Stack.Screen name="deleteAccount" component={DeleteAccount}/>
      <Stack.Screen name="ratingAndReview" component={RatingAndReview}/>
      <Stack.Screen name="availableTimeSlot" component={AvailableTimeSlot}/>
      <Stack.Screen name="orderDetail" component={OrderDetail}/>
      <Stack.Screen name="promotionScreen" component={PromotionScreen}/>
      <Stack.Screen name="addPromotionScreen" component={AddPromotionScreen}/>
      <Stack.Screen name="commission" component={CommissionScreen}/>
      <Stack.Screen name="editPromotionScreen" component={EditPromotionScreen}/>




    </Stack.Navigator>
  );
}
export default AppStack;
