import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import GiftBox from '../../assets/svgs/giftPackage.svg';
import ForwardArrow from '../../assets/svgs/forwardArrow.svg';
import Header from '../../components/appHeader';
import styles from './inviteFriends.style';
import { LargeText, MediumText, XlargeText } from '../../components/Typography';
import colors from '../../assets/colors';

const InvieFriends = ({navigation, route}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Header 
      showTitle={false} 
      showBackButton 
      textstyle={styles.appHeaderText}
      iconColor={colors.white}
      onBackPress={() => navigation.goBack()} />
      <View style={styles.giftImageContainer}>
        <GiftBox />
      </View>

      <View style={styles.subContainer}>
        <XlargeText text={'Invite friends & get 100 points as a reward.'} style={styles.headerText}/>

        <Text style={styles.subText}>
          Invite friends to join ANAKA and receive a 100 Points reward as a
          thank you after successful. Share the experience and enjoy exclusive
          benefits together!
        </Text>

        <Pressable style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Invite Link</Text>
          <ForwardArrow />
        </Pressable>

          <LargeText text={'Available Points'} style={styles.availablePointsText} />
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsNumber}>300</Text>
            <MediumText text={'Loyalty Points'} style={styles.pointsText}/>
          </View>
        
      </View>
    </View>
  );
};
export default InvieFriends;
