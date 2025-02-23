import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import Header from '../../components/appHeader';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch';
import {toggleItems} from '../../staticData';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { MediumText } from '../../components/Typography';

const NotificationSettings = ({navigation, route}) => {

  const [toggles, setToggles] = useState(toggleItems);

  const handleToggle = id => {
    const updatedToggles = toggles.map(item =>
      item.id === id ? {...item, isEnabled: !item.isEnabled} : item,
    );
    setToggles(updatedToggles);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Notification Settings'} showBackButton onBackPress={()=> navigation.goBack()}/>
      <View style={styles.wrapper}>
      <MediumText text='Settings' style={styles.heading}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper:{
    flex:1,
    marginHorizontal:wp(4)
  },
  heading: {
    color: colors.lightBlack,
    marginTop:hp(2),
    marginBottom:hp(2),
    fontFamily:fontsFamily.medium,
    fontSize:RFValue(14),
    fontWeight:'500'
  },
});

export default NotificationSettings;
