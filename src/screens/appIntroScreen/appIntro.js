import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import images from '../../assets/images';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { slides } from '../../staticData';
import { LargeText, SmallText } from '../../components/Typography';
import { AppButton } from '../../components/appButton';

const AppIntro = ({ navigation, route }) => {


  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <View style={styles.innerCircle}>
          <Feather name="chevron-right" color={colors.white} size={24} />
        </View>
        {/* <Icon name="circle-chevron-right" color={colors.primary} size={24} /> */}
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <AppButton title="Get Started" onPress={() => navigation.navigate('authStack')} />
    );
  };


  const renderItem = ({ item }) => {
    return (
      <ImageBackground
        // resizeMode='contain'
        source={item.image} style={styles.bgImageContainer}>
        <ImageBackground source={images.transparentBG} style={styles.footerContainer}>
          <View style={styles.contentContainer}>
            <LargeText text={item.title_1} style={styles.title} />
            <LargeText
              text={item.title_2}
              style={item.title_2 ? [styles.title, { marginBottom: hp(1) }] : styles.title}
            />
            <SmallText text={item.text} style={styles.text} />
          </View>
        </ImageBackground>

      </ImageBackground>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: colors.appBG }}>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        activeDotStyle={{ backgroundColor: colors.primary }}
        bottomButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  bgImageContainer: {
    width: '100%',
    height: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: '0%',
    left: 0,
    right: 0,
    alignItems: 'center',
    height: hp(50),
    paddingTop: 20,
    paddingBottom: 20,
    opacity: 0.8,
    zIndex: 1,
  },
  contentContainer: {
    zIndex: 2,
    position: 'absolute',
    height: hp(26),
    bottom: 0,
  },

  buttonCircle: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: colors.primary,
    alignSelf: 'center',
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: 20,


  },
  text: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 20,


  },
  innerCircle: {
    backgroundColor: colors.primary,
    width: 29,
    height: 29,
    borderRadius: 29 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default AppIntro;
