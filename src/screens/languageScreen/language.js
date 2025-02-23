import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {languages} from '../../staticData';
import LanguageSelector from '../../components/languageSelector/languageSelector';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MediumText } from '../../components/Typography';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';

const Language = ({navigation, route}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelect = language => {
    setSelectedLanguage(language);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Languages'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
        <MediumText text='Please select your default language' style={styles.headerTitle}/>
      <FlatList
        data={languages}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <LanguageSelector
            label={item}
            selected={item === selectedLanguage}
            onSelect={handleSelect}
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
    fontFamily:fontsFamily.medium,
    fontWeight:'600',
    fontSize:RFValue(14)
  },
});

export default Language;
