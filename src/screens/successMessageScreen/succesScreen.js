import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Complete from '../../assets/svgs/complete.svg';
import {AppButton} from '../../components/appButton';
import {SmallText, XlargeText} from '../../components/Typography';
import styles from './successScreen.styles';
import {messages} from '../../staticData';

const SuccessScreen = ({navigation, route}) => {
  const {actionName} = route.params;

  function getMessage(action) {
    const message = messages[action] || {
      title: 'Action Failed',
      subheading: 'An unknown action was performed.',
    };
    return message;
  }
  const {title, subheading,subheading2} = getMessage(actionName);
  const isReschedule = title === messages.reschedule.title ? true : false;

  const goToHome = () => {
    navigation.navigate('BottomStack', {screen: 'homeStack'});
  };
  const isRegister = title === messages.register.title ? true : false;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <Complete />
          <XlargeText text={`${title}`} style={styles.heading} />
          <SmallText text={`${subheading}`} style={isReschedule ? [styles.description,{marginBottom:15,}] : [styles.description] } />
          { isReschedule &&
           <SmallText text={`${subheading2}`} style={[styles.description,]} />
         }
          <View style={styles.bookingsButton}>
            <AppButton 
            onPress={() => {isRegister? goToHome(): navigation.goBack()}} 
            title={isReschedule? "Done" : "Ok, Got it"} />
            {!isRegister && !isReschedule && (
              <AppButton
                onPress={goToHome}
                title="Go to Home Page"
                textstyle={styles.homeButtonText}
                style={styles.homeButton}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
