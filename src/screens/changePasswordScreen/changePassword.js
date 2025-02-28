import React, {useReducer} from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../components/appHeader';
import PasswordInput from '../../components/passwordInput/passwordInput';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MediumText, SmallText} from '../../components/Typography';
import {AppButton} from '../../components/appButton';
import styles from './changePassword.style';

const ChangePassword = ({navigation, route}) => {
  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      currentPass: null,
      newPass: null,
      confirmPass: null,
    },
  );
  const {currentPass, newPass, confirmPass} = state;

  const handleChangePassword = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Change Password'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
          <MediumText
            text="Please Enter your current password"
            style={styles.heading}
          />

          <PasswordInput
            label="Current Password"
            placeholder="Enter your password"
            onChange={text => updateState({currentPass: text})}
            style={{marginTop: hp(1)}}
          />
          <MediumText text="Create a new password" style={styles.newPassText} />

          <PasswordInput
            label="New Password"
            placeholder="Enter your password"
            onChange={text => updateState({newPass: text})}
            style={{marginBottom: hp(2.5)}}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Enter your password"
            onChange={text => updateState({confirmPass: text})}
          />

          <AppButton
            title="Change Password"
            onPress={handleChangePassword}
            style={{marginBottom: hp(2)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
