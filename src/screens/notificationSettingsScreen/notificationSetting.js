import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchSettingByType,
  addSettingsByType,
} from '../../redux/actions/settingsAction';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch';
import {
  labelToKeyMap,
  notificationSettingKeys,
  settingsEnum,
  toggleItems,
} from '../../staticData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MediumText} from '../../components/Typography';
import { populateTogglesFromBackend } from '../../functions';
// import {getNotificationSettingKeysForBackend} from '../../functions';

const NotificationSettings = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading, inProgress , notificationSettings} = useSelector(state => state.settings);
  const salonId = user?.id;

  const [toggles, setToggles] = useState(toggleItems);

  useEffect(() => {
    const fetchNotificationSettings = async () => {
      const response = await dispatch(
        fetchSettingByType({
          type: settingsEnum.NotificationSettings,
          salonId: salonId,
        }),
      ).unwrap();
    };
    fetchNotificationSettings();
  }, [dispatch, salonId]);

  // populate toggles 
  useEffect(() => {
    if (notificationSettings) {
      const type = settingsEnum.NotificationSettings;
      const updatedToggles = populateTogglesFromBackend(notificationSettings, toggleItems ,type);
      setToggles(updatedToggles);
    }
  }, [notificationSettings]);



  const handleToggle = async(id) => {
    const updatedToggles = toggles.map(item =>
      item.id === id ? {...item, isEnabled: !item.isEnabled} : item,
    );
    const selectedItem = updatedToggles.find(item => item.id === id);
    const key = labelToKeyMap[selectedItem.label];
    const value = selectedItem.isEnabled;
    let payload={
      type:settingsEnum.NotificationSettings,
      [key]:value,
      salonId:salonId,
    }
    setToggles(updatedToggles);
    const response = await dispatch(addSettingsByType(payload)).unwrap();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Notification Settings'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <MediumText text="Settings" style={styles.heading} />
        <FlatList
          data={toggles}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>{ 
            // console.log('here is item', item)
            return(
            <ToggleSwitch
              label={item.label}
              isEnabled={item.isEnabled}
              onToggle={() => handleToggle(item.id)}
            />
          )}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  heading: {
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(2),
  },
});

export default NotificationSettings;
