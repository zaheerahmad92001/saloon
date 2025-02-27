import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {offDays} from '../../staticData';
import OffDaysSelector from '../../components/offDaysSelector/offDaysSelector';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MediumText } from '../../components/Typography';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';

const OffDays = ({navigation, route}) => {
  const [selectedOffDays, setSelectedOffDays] = useState([]);

  const handleSelect = (offday) => {
    setSelectedOffDays((prevSelected) => {
      // Check if the item is already selected
      if (prevSelected.includes(offday)) {
        // Remove the item if already selected (unselect)
        return prevSelected.filter((item) => item !== offday);
      } else {
        // Add the item if not selected
        return [...prevSelected, offday];
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Off Days'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
        <MediumText text='Please select your default language' style={styles.headerTitle}/>
      <FlatList
        data={offDays}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <OffDaysSelector
            label={item}
            selected={Array.isArray(selectedOffDays) && selectedOffDays.includes(item)} 
              onSelect={() => handleSelect(item)}
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
    backgroundColor:colors.white
  },
  wrapper:{
    flex:1,
    marginHorizontal:wp(4)
  },
  headerTitle: {
    color: colors.lightBlack,
    marginTop:hp(2),
    marginBottom:hp(2),
    fontFamily:fontsFamily.regular,
    fontWeight:'600',
    fontSize:RFValue(13)
  },
});

export default OffDays;
