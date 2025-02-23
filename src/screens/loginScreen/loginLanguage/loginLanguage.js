import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {SmallText, XlargeText} from '../../../components/Typography';
import colors from '../../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {languages, loginlang} from '../../../staticData';
import LanguageSelector from '../../../components/languageSelector/languageSelector';
import {AppButton} from '../../../components/appButton';

const LanguageLogin = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelect = language => {
    setSelectedLanguage(language);
  };
  return (
    <SafeAreaView style={styles.container}>
      <XlargeText text={'Select Preferred Language'} style={styles.heading} />
      <SmallText
        text={'Please select your preferred language'}
        style={styles.subHeading}
      />
      <FlatList
        data={loginlang}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <LanguageSelector
            label={item}
            selected={item === selectedLanguage}
            onSelect={handleSelect}
          />
        )}
      />
      <AppButton title={'Done'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    marginTop: hp(5),
  },
  subHeading: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
});

export default LanguageLogin;
