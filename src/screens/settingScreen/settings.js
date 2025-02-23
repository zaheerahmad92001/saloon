import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/appHeader';
import MenuItem from '../../components/menItems/menuItems';
import {settingOptions} from '../../staticData';
import colors from '../../assets/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Settings = ({navigation,route}) => {


  const handleNavigation =(routeName)=>{
    navigation.navigate(routeName)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Settings'} showBackButton onBackPress={()=>navigation.goBack()}/>
      <View style={styles.wrapper}>
      <View style={styles.menuContainer}>
        {settingOptions.map((option, index) => (
          <MenuItem
            key={index}
            title={option.title}
            img={option.img}
            showImage={false}
            onPress={() => handleNavigation(option.routeName)}
          />
        ))}
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white,
  },
  wrapper:{
    flex:1,
    marginHorizontal:wp(4)
  },
  menuContainer: {
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
});

export default Settings;
