import React from 'react';
import {View , StyleSheet, Pressable} from 'react-native';
import RoundRightArrrow from '../../assets/svgs/arrow-right.svg';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MediumText, SmallText } from '../Typography';


const AccessAbilitySettingsCard = (props) => {
  const {item, onPress} = props;
    return (
      <Pressable onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.rowContainer}>
          <View style={styles.textContainer}>
            <MediumText text={item.name} style={styles.name}/>
            <SmallText text={item.value}  style={styles.profession}/>
          </View>
          </View>
          <View style={styles.arrowContainer}>
          <RoundRightArrrow/>
          </View>
        </View>
        </Pressable>
      );
};
const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.cardBG,
      borderRadius: 10,
      paddingVertical: 10,
      marginTop:hp(1),
      marginBottom:hp(1),
      gap: 5,
    },
    textContainer: {
      flex: 1,
      marginLeft: 12,
    },
    name: {
      fontWeight:'500',
    },
    profession: {
      color: colors.lightBlack,
      fontSize: RFValue(10),
      marginTop: 2,
    },
    arrowContainer: {
      paddingRight:7,
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
export default AccessAbilitySettingsCard;
