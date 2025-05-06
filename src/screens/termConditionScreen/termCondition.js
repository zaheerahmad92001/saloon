import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {fetchTermsAndPrivacyPolicy} from '../../redux/actions/settingsAction';
import {settingsEnum} from '../../staticData';
import {useDispatch, useSelector} from 'react-redux';

const TermCondition = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {termsAndCondition, loading} = useSelector(state => state.settings);
  useEffect(() => {
    const fetchTermsConditions = async () => {
      const restponse = await dispatch(
        fetchTermsAndPrivacyPolicy(settingsEnum.TermsAndCondition),
      ).unwrap();
    };
    fetchTermsConditions();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Term & Conditions'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        {loading ? (
          <View style={styles.indicator}>
            <ActivityIndicator color={'red'} size={'small'} />
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>{termsAndCondition?.title}</Text>
            <Text style={styles.description}>
              {termsAndCondition?.description}
            </Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,

    color: colors.appBlack,
    marginTop: hp(2),
    marginBottom: hp(1),
    paddingVertical: 10,
  },
  description: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    lineHeight: 24,
  },
  indicator: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});

export default TermCondition;
