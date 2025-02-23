import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import LinearGradient from 'react-native-linear-gradient';
import styles from './loyaltyPoints.style'
import { LargeText, SmallText, XlargeText } from '../../components/Typography';
import LoyaltyPointTabs from '../../components/loyaltyTabs';

const LoyaltyPoints = ({navigation , route}) => {
 
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Loyalty Points'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
     
        <LinearGradient
          colors={[colors.lighterPrimary, '#D7A8B0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.pointsCard}
          >
          <View style={styles.pointsCardContainer}>
            <SmallText text={'ANAQA Points'} style={{colors:colors.appBlack}}/>
          <View style={styles.pointContainer}>
            <XlargeText text={'300'} style={styles.pointsText} />
            <SmallText text={'Points'} />
          </View>
          <SmallText text={'100 points = SAR 10'}  style={styles.pointsCardSubtext}/>
          </View>
        </LinearGradient>

        <LargeText text={'Loyalty Points History'} style={styles.heading}/>

        <LoyaltyPointTabs/>
      
      </View>
    </SafeAreaView>
  );
};

export default LoyaltyPoints;
