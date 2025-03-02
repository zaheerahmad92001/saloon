import React, {useReducer, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/appHeader';
import styles from './styles'
import {View, Text, ScrollView,} from 'react-native';
import DropdownComponent from '../../components/dropdown/dropdown';
import {AppButton} from '../../components/appButton';
import {LargeText} from '../../components/Typography';
import TextField from '../../components/textField/textField';

const AddrequestScreen = ({navigation, route}) => {


   const [state, updateState] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        selectedValue
      },
    );
    const {selectedValue} = state

  const Items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  const [comments, setComments] = useState('');

  const addrequest = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Add Request'} showBackButton onBackPress={()=>navigation.goBack()} />

      <View style={styles.mainContainer}>
        <ScrollView>
          <LargeText text={'Add New Request'} style={styles.headingtext} />
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Issue</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => updateState({selectedValue :item.value})}
              placeholder="Choose an option"
            />
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.label}>Description</Text>
            <TextField
              placeholder={'Your review here'}
              multiline
              inputStyle={styles.inputStyle}
              onChangeText={setComments}
            />
          </View>
          <View style={styles.imageContainer}>
          </View>
        </ScrollView>
        <AppButton title={'Submit'} onPress={addrequest} />

      </View>

    </SafeAreaView>
  );
};
export default AddrequestScreen;
