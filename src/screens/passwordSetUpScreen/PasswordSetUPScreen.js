import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AppButton } from '../../components/appButton';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const PasswordSetupScreen = ({navigation, route}) => {
  const [pin, setPin] = useState('');

  const handlePress = (num) => {
    if (pin.length < 6) {
      setPin(pin + num);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Set Up your Password</Text>

      {/* Pin Dots */}
      <View style={styles.pinContainer}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={[styles.dot, pin.length > index && styles.filledDot]} />
        ))}
      </View>

      {/* Number Pad */}
      <View style={styles.keypad}>
        {[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [0], 
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((num, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() => (num === '⌫' ? handleDelete() : num !== '' && handlePress(num))}
              >
                <Text style={styles.keyText}>{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Save Password Button */}
      {/* <AppButton
            onPress={() => navigation.navigate('addPromotionScreen')}
            title={'Save Password'}
            style={styles.saveButton}
            textstyle={styles.buttonText}
          /> */}
          {/* ()=> navigation.navigate('deleteAccount') */}
      <TouchableOpacity style={styles.saveButton} disabled={pin.length < 6} onPress={()=> ()=> navigation.navigate('deleteAccount')}>
        <Text style={styles.saveButtonText}>Save Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
    fontFamily:fontsFamily.medium,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 20,
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
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#AD6776',
    borderRadius: 18,
    margin: 10,
  },
  keyText: {
    fontSize: 15,
    color: '#AD6776',
    fontWeight: '600',
  },
  saveButton: {
    width: '80%',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PasswordSetupScreen;
