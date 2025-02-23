import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Clock from '../assets/svgs/clock.svg';
import { LargeText, SmallText } from './Typography';
import { View } from 'react-native';
import colors from '../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';

const TimmingComponent = (props)=>{
    const {heading, subHeading, style , handleOnPress} = props;
    return(
        <Pressable onPress={handleOnPress} style={[styles.timingContainer,style]}>
          <LargeText text={heading} style={styles.openeningHeading} />
          <View style={styles.locationSubContainer}>
            <Clock />
            <SmallText text={subHeading} style={styles.openeningText} />
          </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    timingContainer:{
        backgroundColor:colors.white,
        paddingVertical:10,
        paddingHorizontal:12,
        borderRadius:10,
      },
      locationSubContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 1,
      },
      openeningHeading: {
        textAlign: 'left',
        fontSize: RFValue(14),
        fontWeight: '500',
        marginBottom:5,
      },
      openeningText: {
        marginLeft: 5,
        color: colors.lightBlack,
        fontWeight: '500',
      },
})

export default TimmingComponent;
