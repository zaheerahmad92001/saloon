import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '../../../assets/images';
import HomeStack from '../homeStack';
import Booking from '../../bookingScreen/booking';
import ChatList from '../../chatList/chatList';
import MoreScreen from '../../More/MoreScreen';
import Schedule from '../../scheduleScreen/schedule';



import colors from '../../../assets/colors';

const Tab = createBottomTabNavigator();



// Image source mapping for each tab
const TAB_ICONS = {
  homeStack: images.homeTab,
  Booking:images.bookingTab,
  Schedule:images.scheduleTab,
  Messages:images.messageTab,
  More:images.moreTab 
};

// Custom Tab Bar Component
const CustomTabBar = (props) => {
  return (
    <View style={styles.tabBarContainer}>
      {props.state.routes.map((route, index) => {
        const isFocused = index === props.state.index;
        const isSchedule = route.name==='Schedule'

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <View
              style={[
                styles.tabIconContainer,
                isFocused && styles.activeTabBackground,
              ]}
            >
              <Image
                style={[styles.tabIcon, isSchedule && styles.scheduleTabStyle, { tintColor: isFocused ? colors.primary : 'gray' }]}
                source={TAB_ICONS[route.name]}
                // resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={[styles.tabLabel,{ color: isFocused ? colors.primary : 'gray' }]}>
              {route.name==='homeStack' ? 'Home' : route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomStack = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="homeStack" component={HomeStack} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Messages" component={ChatList} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor:'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingBottom:10,

  },
  tabButton: {
    alignItems: 'center',
    justifyContent:'center',
  },
  tabIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  activeTabBackground: {
    backgroundColor: colors.lightPrimary,
  },
  tabIcon: {
    width: 40,
    height: 40,
  },
  scheduleTabStyle: {
    width: 26,
    height: 26,
  },
  tabLabel: {
    fontSize: 12,
  },
});

export default BottomStack;
