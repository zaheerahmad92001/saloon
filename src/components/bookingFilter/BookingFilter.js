import React, {useState} from 'react';
import {StyleSheet,View} from 'react-native';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MyDropdown from '../dropdown/dropdown';
import DatePickerComponent from '../datePicker/datePicker';
import {AppButton} from '../appButton';
import {SmallText, XlargeText} from '../Typography';

const BookingFilter = props => {
  const {isHome = false, onCancel, onApply, onClear} = props;
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  return (
    <View style={styles.mainContainer}>
      <XlargeText text={'Filters'}/>
      <View style={styles.divider}></View>

      {!isHome && (
        <View style={styles.subContainer}>
          <SmallText text={'Status'} style={styles.label} />
          <MyDropdown
            data={items}
            value={selectedValue}
            onChange={item => setSelectedValue(item.value)}
            placeholder="Select Status"
          />
        </View>
       )}

      <View style={styles.subContainer}>
        <SmallText text={'From Date'} style={styles.label} />
        <View style={styles.dateView}>
          <DatePickerComponent mode="date" onSelect={setSelectedDate} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <SmallText text={'To Date'} style={styles.label} />
        <View style={styles.dateView}>
          <DatePickerComponent mode="date" onSelect={setSelectedDate} />
        </View>
      </View>

      <View style={styles.timeView}>
        <View style={styles.TimesubContainer}>
          <SmallText text={'From'} style={styles.label} />
          <View style={styles.dateView}>
            <DatePickerComponent mode="time" onSelect={setSelectedTime} />
          </View>
        </View>

        <View style={styles.TimesubContainer}>
          <SmallText text={'To'} style={styles.label} />
          <View style={styles.dateView}>
            <DatePickerComponent mode="time" onSelect={setSelectedTime} />
          </View>
        </View>
      </View>

      <View style={[styles.divider,{marginVertical:hp(2.5)}]}></View>

      <View style={styles.buttonContainer}>
        <AppButton
          onPress={onClear}
          title="Clear Filter"
          style={styles.cancelButton}
          textstyle={styles.cancelText}
        />
        <AppButton onPress={onApply} title="Apply" style={{flex: 1}} />
      </View>
      <AppButton
        title={'Cancel'}
        onPress={onCancel}
        style={styles.cancelBookingButton}
        textstyle={styles.cancelBookingText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
  },
  divider: {
    marginVertical: 5,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },

  subContainer: {
    marginVertical: hp(1),
  },

  TimesubContainer: {
    marginVertical: hp(0.5),
    width: wp('43%'),
  },
  label: {
    marginBottom: 5,
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
  cancelText: {
    color: colors.primary,
    fontWeight: '600',
  },
  dateView: {
    marginTop: 2,
  },
  cancelBookingButton: {
    flex: 1,
    marginRight: 5,
    marginTop:hp(1.5),
    backgroundColor: 'transparent',
  },
  cancelBookingText: {
    color: colors.primary,
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
export default BookingFilter;
