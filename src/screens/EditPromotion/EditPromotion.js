import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import MyDropdown from '../../components/dropdown/dropdown';

//import DateTimePickerComponent from '../../components/datePicker/datePicker';
import DatePickerComponent from '../../components/datePicker/datePicker';
import {AppButton} from '../../components/appButton';
import styles from './EditPromotion.Style';
import TextField from '../../components/textField/textField';
import Header from '../../components/appHeader';
import {LargeText} from '../../components/Typography';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const EditPromotionScreen = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');

  const items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  return (
    <SafeAreaView style={styles.contianer}>
      <Header
        title={'Promotion'}
        showBackButton
        onBackPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        
        <LargeText text={'Edit Promotion'} style={styles.addnewPromotionText} />

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{paddingTop:15}}>
          <TextField
            label={'Title'}
            placeholder={'Enter Title'}
            style={styles.inputFields}
            inputStyle={styles.inputstyles}
          />

          <View style={styles.subContainer}>
            <Text style={styles.complaintTypeText}>Service Type</Text>
            <MyDropdown
              data={items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Select Service"
            />
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.complaintTypeText}>Discount Type</Text>
            <MyDropdown
              data={items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Select Discount"
            />
          </View>

          <TextField
            label={'Discount Value'}
            placeholder={'Enter Dicsount Value'}
            style={styles.inputFields}
            inputStyle={styles.inputstyles}
          />
          <TextField
            label={'Usage'}
            placeholder={'Enter Usage Limit'}
            style={styles.inputFields}
            inputStyle={styles.inputstyles}
          />

          <View style={styles.subContainer}>
            <Text style={styles.label}>Valid From </Text>
            <View style={styles.dateView}>
              <DatePickerComponent mode="date" onSelect={setSelectedFromDate} />
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.label}>Valid To</Text>
            <View style={styles.dateView}>
              <DatePickerComponent mode="date" onSelect={setSelectedToDate} />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <AppButton
            onPress={() => {}}
            title="Update"
            style={styles.buttonStyle}
          />
      </View>
    </SafeAreaView>
  );
};

export default EditPromotionScreen;
