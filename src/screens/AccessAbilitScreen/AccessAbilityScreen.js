import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from '../../components/appHeader';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch';
import {AccessAbilitytoggleItems} from '../../staticData';
import { MediumText } from '../../components/Typography';
import styles from './accessAbilityScreen.Style';

const AccessAbility = ({navigation, route}) => {

  const [toggles, setToggles] = useState(AccessAbilitytoggleItems);

  const handleToggle = id => {
    const updatedToggles = toggles.map(item =>
      item.id === id ? {...item, isEnabled: !item.isEnabled} : item,
    );
    setToggles(updatedToggles);
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
