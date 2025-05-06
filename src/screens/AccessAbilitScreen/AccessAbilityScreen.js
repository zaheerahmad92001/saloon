import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from '../../components/appHeader';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch';
import {accessAbilityLabelToKeyMap, AccessAbilitytoggleItems, settingsEnum} from '../../staticData';
import { MediumText } from '../../components/Typography';
import styles from './accessAbilityScreen.Style';
import { useDispatch, useSelector } from 'react-redux';
import { addSettingsByType, fetchSettingByType } from '../../redux/actions/settingsAction';
import { populateTogglesFromBackend } from '../../functions';

const AccessAbility = ({navigation, route}) => {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading, inProgress , accessAbilitySettings} = useSelector(state => state.settings);
  const salonId = user?.id;

  const [toggles, setToggles] = useState(AccessAbilitytoggleItems);


  useEffect(() => {
    const fetchAccessAbilitySettings = async () => {
      const response = await dispatch(
        fetchSettingByType({
          type: settingsEnum.AccessibilitySettings,
          salonId: salonId,
        }),
      ).unwrap();
    };
    fetchAccessAbilitySettings();
  }, [dispatch, salonId]);

// populate toggles

  useEffect(() => {
    if (accessAbilitySettings) {
      const type = settingsEnum.AccessibilitySettings;
      const updatedToggles = populateTogglesFromBackend(accessAbilitySettings, AccessAbilitytoggleItems ,type);
      setToggles(updatedToggles);
    }
  }, [accessAbilitySettings]);


  const handleToggle = async (id) => {
    const updatedToggles = toggles.map(item =>
      item.id === id ? {...item, isEnabled: !item.isEnabled} : item,
    );
    const selectedItem = updatedToggles.find(item => item.id === id);
    const key = accessAbilityLabelToKeyMap[selectedItem.label];
    const value = selectedItem.isEnabled;

    let payload={
          type:settingsEnum.AccessibilitySettings,
          [key]:value,
          salonId:salonId,
        };
    setToggles(updatedToggles);
     const response = await dispatch(addSettingsByType(payload)).unwrap();
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Accessibility'} showBackButton onBackPress={()=> navigation.goBack()}/>
      <View style={styles.wrapper}>
      <MediumText text='You can add password to these pages' style={styles.heading}/>
      <FlatList
        data={toggles}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ToggleSwitch
            label={item.label}
            isEnabled={item.isEnabled}
            onToggle={() => handleToggle(item.id)}
          />
        )}
      />
      </View>
    </SafeAreaView>
  );
};

export default AccessAbility;
