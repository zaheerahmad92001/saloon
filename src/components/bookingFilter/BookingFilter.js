import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MyDropdown from '../dropdown/dropdown';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import DatePickerComponent from '../datePicker/datePicker';
import { AppButton } from '../appButton';
import { requestStatus } from '../../staticData';
const BookingFilter = props => {
    const { onCancel, onApply, onClear } = props;
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const items = [
        { label: 'Option A', value: '1' },
        { label: 'Option B', value: '2' },
        { label: 'Option C', value: '3' },
        { label: 'Option D', value: '4' },
        { label: 'Option E', value: '5' },
    ];
    const [selectedStatus, setSelectedStatus] = useState('Resolved');

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.filterText}>Filters</Text>
            <View style={styles.divider}></View>
            {/* <Text style={styles.statusText}>Status</Text> */}
            {/* <View style={styles.statusContainer}>
        {requestStatus.map(status => (
          <TouchableOpacity
            key={status}
            style={[
              styles.statusButton,
              selectedStatus === status && styles.selectedStatus,
            ]}
            onPress={() => setSelectedStatus(status)}>
            <Text
              style={[
                styles.statusText,
                selectedStatus === status && styles.selectedText,
              ]}>
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
            <View style={styles.subContainer}>
                <Text style={styles.complaintTypeText}>Status</Text>
                <MyDropdown
                    data={items}
                    value={selectedValue}
                    onChange={item => setSelectedValue(item.value)}
                    placeholder="Select Status"
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.label}>From Date</Text>
                <View style={styles.dateView}>
                    <DatePickerComponent mode="date" onSelect={setSelectedDate}/>
                </View>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.label}>To Date</Text>
                <View style={styles.dateView}>
                    <DatePickerComponent mode="date" onSelect={setSelectedDate}/>
                </View>
            </View>

            <View style = {styles.timeView}>
            <View style={styles.TimesubContainer}>
                <Text style={styles.label}>From</Text>
                <View style={styles.dateView}>
                    <DatePickerComponent mode="time" onSelect={setSelectedTime}/>
                </View>
            </View>

            <View style={styles.TimesubContainer}>
                <Text style={styles.label}>To</Text>
                <View style={styles.dateView}>
                    <DatePickerComponent mode="time" onSelect={setSelectedTime}/>
                </View>
            </View>
            </View>
           
            <View style={styles.divider}></View>

            <View style={styles.buttonContainer}>
                <AppButton
                    onPress={onClear}
                    title="Clear Filter"
                    style={styles.cancelButton}
                    textstyle={styles.cancelText}
                />
                <AppButton onPress={onApply} title="Apply" style={{ flex: 1 }} />
            </View>
            <AppButton title={'Cancel'} onPress={onCancel} style={styles.cancelBookingButton} textstyle={styles.cancelBookingText} />
        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.appBG,
    },
    divider: {
        marginTop: 10,
        marginBottom: 5,
        width: wp('80%'),
        height: 1,
        backgroundColor: colors.darkGray,
    },

    filterText: {
        marginTop: 15,
        fontFamily: fontsFamily.bold,
        fontSize: RFValue(16),
        //alignItems:'center'
    },
    statusText: {
        fontFamily: fontsFamily.bold,
        fontSize: RFValue(13),
        //alignItems:'center'
    },

    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    statusButton: {
        flex: 1,
        paddingVertical: 13,
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: colors.inputGray,
        borderRadius: 7,
        borderColor: colors.darkGray,
        borderWidth: 1,
    },
    selectedStatus: {
        backgroundColor: colors.primary,
    },
    statusText: {
        alignItems: 'center',
        fontWeight: '600',
        color: colors.appBlack,
    },
    selectedText: {
        color: colors.white,
    },

    subContainer: {
        marginVertical: hp(0.5),
       
        //marginTop:5
    },

    TimesubContainer: {
        marginVertical: hp(0.5),
        width:wp('43%')
       
        //marginTop:5
    },

    headingtext: {
        textAlign: 'left',
        marginTop: hp(1.5),
        marginBottom: hp(2),
        fontWeight: '600',
    },
    label: {
        fontSize: RFValue(12),
        color: colors.appBlack,
        fontFamily: fontsFamily.medium,
        fontWeight: '400',
        marginBottom: 5,
        // marginVertical:hp(2),
    },
    complaintTypeText: {
        fontSize: RFValue(12),
        color: colors.appBlack,
        fontFamily: fontsFamily.medium,
        fontWeight: '400',
        marginBottom: 4,
        marginTop: 10,
        // marginVertical:hp(2),
    },

    inputstyles: {
        minHeight: hp(13),
        textAlignVertical: 'top',
        fontSize: RFValue(14),
    },
    picker: {
        backgroundColor: '#f5f5f5',
        marginTop: 5,
    },
    dateInput: {
        backgroundColor: colors.inputGray,
        paddingVertical: 16,
        paddingHorizontal: 15,
        marginTop: 5,
        borderRadius: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: colors.lighterPrimary,
        borderColor: colors.lighterPrimary,
    },
    applyButton: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5,
        paddingVertical: 14,
    },
    cancelText: {
        color: colors.primary,
        fontWeight: '600',
    },
    applyText: {
        color: colors.white,
        fontWeight: '600',
    },
    dateView: {
        //flex: 1,
        paddingHorizontal: 0,
        marginTop: 2,
    },
    cancelBookingButton: {
        flex: 1,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    cancelBookingText: {
        color: colors.primary,
    },
    timeView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10
    }

});
export default BookingFilter;
