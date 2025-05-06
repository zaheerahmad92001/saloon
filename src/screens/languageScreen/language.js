import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {languages, settingsEnum} from '../../staticData';
import LanguageSelector from '../../components/languageSelector/languageSelector';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MediumText} from '../../components/Typography';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {
  addSettingsByType,
  fetchSettingByType,
} from '../../redux/actions/settingsAction';

const Language = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading, inProgress, defaultLanguage} = useSelector(state => state.settings);
  const salonId = user?.id;

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    const fetchAccessAbilitySettings = async () => {
      const response = await dispatch(
        fetchSettingByType({
          type: settingsEnum.Language,
          salonId: salonId,
        }),
      ).unwrap();
    };
    fetchAccessAbilitySettings();
  }, [dispatch, salonId]);

  // populage toggle

  useEffect(() => {
    if (defaultLanguage) {
      setSelectedLanguage(defaultLanguage);
    }
  }, [defaultLanguage]);

  const handleSelect = async language => {
    setSelectedLanguage(language);
    let payload = {
      type: settingsEnum.Language,
      language: language,
      salonId: salonId,
    };
    const response = await dispatch(addSettingsByType(payload)).unwrap();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Languages'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <MediumText
          text="Please select your default language"
          style={styles.headerTitle}
        />
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
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  headerTitle: {
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(2),
    fontFamily: fontsFamily.regular,
    fontWeight: '600',
    fontSize: RFValue(13),
  },
});

export default Language;
