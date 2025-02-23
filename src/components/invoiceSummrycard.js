import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../assets/colors";
import fontsFamily from "../assets/fontsFamily";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const InvoiceSummry=(props)=>{
    const {item} = props
    return(
        <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>{item?.title}</Text>
        <Text style={styles.summaryValue}>{item?.count}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    summaryCard: {
        justifyContent:'center',
        padding: 10,
        backgroundColor: colors.lightGray,
        borderRadius: 10,
        width:wp(28),
        height:hp(10),
        gap:5,
      },
      summaryTitle: {
        fontSize: RFValue(14),
        color: colors.lightBlack,
        fontFamily: fontsFamily.regular,
        fontWeight:'400',
      },
      summaryValue: {
        fontSize: RFValue(20),
        fontFamily: fontsFamily.regular,
        textAlign: 'left',
        fontWeight:'500',
      },
})

export default InvoiceSummry;