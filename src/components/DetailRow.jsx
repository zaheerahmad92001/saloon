import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import fontsFamily from '../assets/fontsFamily';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../assets/colors';

const DetailRow = ({ label, value, Icon }) => (
    <View style={styles.detailRow}>
        <View style={styles.invoiceRow}>
            <Icon/>
            <Text style={styles.detailLabel}>{label}</Text>
        </View>
        <Text style={styles.detailValue}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:hp(1.7),
    },
    detailLabel: {
        fontSize: RFValue(14),
        color:colors.lightBlack,
        fontFamily: fontsFamily.regular,
        fontWeight:'300',
        marginLeft: 5,
    },
    detailValue: {
        fontSize: RFValue(12),
        color:colors.appBlack,
        fontWeight:'500',
        fontFamily: fontsFamily.bold,
        width: wp(40),
        textAlign: 'right',
    },
    invoiceRow: {
        flexDirection: 'row',
    },
});

export default DetailRow;