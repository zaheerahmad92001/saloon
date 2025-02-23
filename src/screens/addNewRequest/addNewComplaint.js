import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/appHeader';
import styles from './styles';
import {View, Text, TextInput, ScrollView} from 'react-native';
import DropdownComponent from '../../components/dropdown/dropdown';
import SalonCard from '../../components/complaintsSalonCard/complaintsSalonCard';
import {mockData} from '../../staticData';
import {AppButton} from '../../components/appButton';
import images from '../../assets/images';
import {LargeText} from '../../components/Typography';
import TextField from '../../components/textField/textField';

const AddrequestScreen = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const Items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  const RenderSalonCard = ({item}) => (
    <SalonCard
      image={images.room}
      title={'Hair Avenue'}
      datetime={'Mon 21 Sep 2024'}
      location={'Moratuwa, Colombo'}
      distance={'2 km'}
      service={'Hair Cut'}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={false}
      position={item.position}
    />
  );
  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };
  const [comments, setComments] = useState('');

  const addrequest = () => {
    console.log('add request');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Request or Complaints'} showBackButton onBackPress={()=>navigation.goBack()} />

      <View style={styles.mainContainer}>
        <ScrollView>
          {/* <RenderSalonCard item={mockData}/> */}

          <LargeText text={'Add New Request'} style={styles.headingtext} />
          <View style={styles.subContainer}>
            <Text style={styles.label}>Booking Reference</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Type</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Issue</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Salon</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Comments</Text>
            <TextField
              placeholder={'Your review here'}
              multiline
              inputStyle={styles.inputStyle}
              onChangeText={setComments}
            />
          </View>
          <AppButton title={'Submit'} onPress={addrequest} style={styles.button} />
        </ScrollView>
       
      </View>
    </SafeAreaView>
  );
};
export default AddrequestScreen;
