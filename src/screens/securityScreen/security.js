import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import colors from '../../assets/colors';
import {MediumText, XlargeText} from '../../components/Typography';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const SecurityScreen = ({navigation, route}) => {
  const {screenName} = route.params || {};
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === 6 && screenName === 'deleteAccount') {
      navigation.navigate('deleteAccount');
    }
    if (pin.length === 6 && screenName === 'accessAbility') {
      navigation.navigate('accessAbilitySettings');
    }
  }, [pin, navigation, screenName]);

  const handleNavigation = () => {
    navigation.goBack();
  };

  const handlePress = num => {
    if (pin.length < 6) {
      setPin(pin + num);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <MediumText
          text={
            screenName === 'deleteAccount'
              ? 'Touch ID or Enter Passcode'
              : 'Set Up your Password'
          }
          style={
            screenName === 'deleteAccount'
              ? [styles.header, {color: colors.lightBlack}]
              : [styles.header]
          }
        />

        <View style={styles.pinContainer}>
          {[...Array(6)].map((_, index) => (
            <View
              key={index}
              style={[styles.dot, pin.length > index && styles.filledDot]}
            />
          ))}
        </View>

        <View style={styles.keypad}>
          {[[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((num, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.key}
                  onPress={() =>
                    num === '⌫'
                      ? handleDelete()
                      : num !== '' && handlePress(num)
                  }>
                  <XlargeText text={num} style={styles.keyText} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {screenName === 'deleteAccount' ? (
          <Pressable onPress={handleNavigation}>
            <Text style={[styles.saveButtonText, {color: colors.appBlack}]}>
              {'Cancel'}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.saveButton}
            disabled={pin.length < 6}
            onPress={handleNavigation}>
            <Text style={styles.saveButtonText}>{'Save Password'}</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
  },
  header: {
    color: colors.primary,
    marginBottom: hp(2.5),
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.lightBlack,
    marginHorizontal: 5,
  },
  filledDot: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  keypad: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.sharpPrimary,
    borderRadius: 18,
    margin: 15,
  },
  keyText: {
    color: colors.sharpPrimary,
    fontSize: 24,
  },
  saveButton: {
    width: '80%',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  saveButtonText: {
    fontSize: RFValue(13),
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontsFamily.regular,
  },
});

export default SecurityScreen;
