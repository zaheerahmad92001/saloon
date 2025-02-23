import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {salonCategories} from '../../staticData';
import SalonSelector from '../../components/salonSelector/salonSelector';
import Header from '../../components/appHeader';
import { LargeText, SmallText } from '../../components/Typography';
import styles from '../salonCategorySelection/salonCategorySelection.Style'
import { AppButton } from '../../components/appButton';
const salonCategorySelection = ({navigation, route}) => {
  const [selectedSalon, setSelectedSalon] = useState(null);
   const [isChecked, setChecked] = useState(false);
  const handleSelect = salon => {
    setSelectedSalon(salon);
  };
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.wrapper}>
        
        <Text  style={styles.headerTitle}>Select Salon Category</Text>
        <SmallText text='Please select your salon category' style={styles.subtext}/>
      <FlatList
        data={salonCategories}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SalonSelector
            label={item}
            selected={item === selectedSalon}
            onSelect={handleSelect}
          />
        )}
      />
     <AppButton
            title={'Continue'}
            disabled={!isChecked}
            style={styles.signUpButton}
            textstyle={styles.signUpText}
            onPress={() => navigation.navigate('contractScreen')}
          />
      </View>
    </SafeAreaView>
  );
};
export default salonCategorySelection;
