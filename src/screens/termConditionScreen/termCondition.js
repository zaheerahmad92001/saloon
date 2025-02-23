import {Text, SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import Header from '../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TermCondition = ({navigation,route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Term & Conditions'} showBackButton onBackPress={()=> navigation.goBack()}/>
     <View style = {styles.mainContainer}>
     <ScrollView>
        <Text style={styles.heading}>Term & Conditions</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam
          posuere porttitor at vivamus. Proin augue morbi viverra scelerisque
          nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue
          donec ultricies. Elit augue in elementum tempus quis scelerisque erat.
          Tincidunt ac erat dictum ornare consequat luctus. Posuere viverra
          purus fames eget dolor sit amet. Arcu amet dolor dignissim fusce. Orci
          eu pulvinar ut vulputate egestas nisi tortor pellentesque. Nulla
          pellentesque et a in aliquet duis nisi. Mattis turpis sem aliquet
          massa id nibh. Elit ut semper tincidunt cursus.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam
          posuere porttitor at vivamus. Proin augue morbi viverra scelerisque
          nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue
          donec ultricies. Elit augue in elementum tempus quis scelerisque erat.
          Tincidunt ac erat dictum ornare consequat luctus. Posuere viverra
          purus fames eget dolor sit amet. Arcu amet dolor dignissim fusce. Orci
          eu pulvinar ut vulputate egestas nisi tortor pellentesque. Nulla
          pellentesque et a in aliquet duis nisi. Mattis turpis sem aliquet
          massa id nibh. Elit ut semper tincidunt cursus.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam
          posuere porttitor at vivamus. Proin augue morbi viverra scelerisque
          nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue
          donec ultricies. Elit augue in elementum tempus quis scelerisque erat.
          Tincidunt ac erat dictum ornare consequat luctus. Posuere viverra
          purus fames eget dolor sit amet. Arcu amet dolor dignissim fusce. Orci
          eu pulvinar ut vulputate egestas nisi tortor pellentesque. Nulla
          pellentesque et a in aliquet duis nisi. Mattis turpis sem aliquet
          massa id nibh. Elit ut semper tincidunt cursus.
        </Text>
      </ScrollView>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
  mainContainer:{
    flex: 1,
    backgroundColor:colors.lightGray,
    paddingHorizontal:20,
    paddingBottom:20
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.bold,
    fontWeight:'600',
    color: colors.appBlack,
    marginTop: hp(2),
    marginBottom: hp(1),
    paddingVertical:10,
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
});

export default TermCondition;
