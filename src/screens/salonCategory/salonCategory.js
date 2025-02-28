import {FlatList, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import {salonCategories} from '../../staticData';
import SalonSelector from '../../components/salonSelector/salonSelector';
import {LargeText, SmallText} from '../../components/Typography';
import styles from './salonCategory.style';
import {AppButton} from '../../components/appButton';


const SalonCategorySelection = ({navigation, route}) => {
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const handleSelect = salon => {
    setSelectedSalon(salon);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <LargeText text={'Select Salon Category'} style={styles.headerTitle} />
        <SmallText
          text="Please select your salon category"
          style={styles.subtext}
        />
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
export default SalonCategorySelection;
