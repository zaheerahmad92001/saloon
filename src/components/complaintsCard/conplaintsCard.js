import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import colors from '../../assets/colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { LargeText, SmallText } from '../Typography';

const ComplaintsCard = (Item) => {
    return (
        <View style={styles.card}>
            <View style={styles.complainView}>
                <LargeText text={'Complaint Status'}/>
                <View style={styles.statusView}>
                    <Text style={styles.statusText}>
                        Resolved
                    </Text>
                </View>
            </View>

            <View style={styles.columnView}>
                <View style={styles.columnOneView}>
                    <LargeText text={'Request ID'} style={styles.label}/>
                    <SmallText text={'#21506854'} style={styles.value}/>
                </View>

                <View style={styles.columnOneView}>
                    <LargeText text={'Complaint Date'} style={styles.label}/>
                    <SmallText text={'02 Feb 2024'} style={styles.value}/>
                </View>
            </View>

            <View style={styles.columnView}>
                <View style={styles.columnOneView}>
                    <LargeText text={'Salon'} style={styles.label}/>
                    <SmallText text={'ABS Salon'} style={styles.value}/>
                </View>

                <View style={styles.columnOneView}>
                    <LargeText text={'Complain type'} style={styles.label}/>
                    <SmallText text={'Service'} style={styles.value}/>
                </View>
            </View>

            <View style={styles.columnView}>
                <View style={styles.columnOneView}>
                    <LargeText text={'Charging amount'} style={styles.label}/>
                    <SmallText text={'Sar 200'} style={styles.value}/>
                </View>
            </View>

            <View style={styles.descriptionView}>
                <LargeText text={'Description'} style={styles.label}/>
                <Text style={styles.value}>Lorem ipsum dolor sit amet consectetur. Vulputate mauris pharetra egvllus.Lorem ipsum dolor sit amet consectetur. Vulputate mauris pharetra egvllus.</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal:15,
        marginBottom: 15,
    },
    complainView: {
        flexDirection: 'row',
        backgroundColor: colors.lightGray,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical:10,
        marginTop: 10,
        marginBottom: 10,
    },
    statusView: {
        backgroundColor: colors.lightSuccess,
        borderRadius: 10,
        paddingVertical:Platform.OS === 'android' ? 2 : 3,
        paddingHorizontal:10,
        alignItems: 'center',
    },
    statusText: {
        fontSize: RFValue(12),
        color: colors.success,
        fontFamily: fontsFamily.regular,
        marginTop: 2,
    },
    columnView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    columnOneView: {
        flex: 1,
        marginBottom:10,

    },

    label: {
        alignSelf:'flex-start',
    },
    value: {
        color:colors.lightBlack,
        fontFamily: fontsFamily.regular,
        marginTop: 2,
    },
    descriptionView: {
       marginTop:6,
       marginBottom:hp(2),
    },
});

export default ComplaintsCard;
