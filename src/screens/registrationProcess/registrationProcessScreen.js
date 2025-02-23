import React, { useEffect } from 'react';
import {View, SafeAreaView,Text} from 'react-native';
import Complete from '../../assets/svgs/complete.svg';
import {AppButton} from '../../components/appButton';
import {SmallText, XlargeText} from '../../components/Typography';
import styles from './registrationProcessScreen.Style';
import {messages} from '../../staticData';

const RegistrationProcessScreen = ({navigation, route}) => {
  const {actionName} = route.params;

  function getMessage(action) {
    const message = messages[action] || {
      title: 'Action Failed',
      subheading: 'An unknown action was performed.',
    };
    return message;
  }
  const {title, subheading,subheading2 , subheading3 , subheading4} = getMessage(actionName);

useEffect(()=>{
  setTimeout(() => {
    navigation.navigate('successScreen',{actionName:'register'})
  }, 2000);
},[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <Complete />
          <XlargeText text={`${title}`} style={styles.heading} />
          <SmallText text={`${subheading}`} style={styles.description} />
          <SmallText text={`${subheading2}`} style={styles.description} />
          <SmallText text={`${subheading3}`} style={[styles.description,{marginTop:15}]} />
          <SmallText text={`${subheading4}`} style={styles.description} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default  RegistrationProcessScreen;
