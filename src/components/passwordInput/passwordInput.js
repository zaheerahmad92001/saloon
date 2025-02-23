import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather'; // Ensure this import
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import CloseEye from '../../assets/svgs/eye-slash.svg';
import Lock from '../../assets/svgs/lock.svg';

const PasswordInput = ({
  label,
  placeholder = 'Enter your password',
  onChange,
  style,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
        <Lock/>
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          onChangeText={onChange}
        />
        <Pressable onPress={togglePasswordVisibility} style = {{marginRight:10}}>
          {isPasswordVisible ? (
            <FeatherIcons name={'eye'} size={20} color={colors.lightBlack} />
          ) : (
            <CloseEye />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: RFValue(14),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    fontWeight: '400',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.inputGray,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  icon: {
    marginRight: 10,
    marginLeft:8
  },
});

export default PasswordInput;
