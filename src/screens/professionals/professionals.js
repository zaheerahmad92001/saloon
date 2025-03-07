import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/appHeader';

import styles from './professionals.style';
import {MediumText} from '../../components/Typography';
import OverViewDropdown from '../../components/overviewDropdown/overviewDropdown';
import {mockData} from '../../staticData';
import CustomersCard from '../../components/customersCard/CustomersCard';
import { AppButton } from '../../components/appButton';
import StaticsProfessionalCard from '../../components/statisticsTab/staticsProfessionalCard';

const Location = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    {label: 'Weekly', value: '1'},
    {label: 'Weekly', value: '2'},
    {label: 'Weekly', value: '3'},
    {label: 'Weekly', value: '4'},
    {label: 'Weekly', value: '5'},
  ];

  const renderItem = ({item, index}) => {
    // return <CustomersCard item={item} />;
    return <StaticsProfessionalCard/>
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Professionals'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.sectionHeader}>
            <MediumText text={'Professionals'} style={styles.sectionTitle} />
            <OverViewDropdown
              data={items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Weekly"
            />
          </View>

          <FlatList
            data={mockData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
             <AppButton 
              title={'Add Professional'} 
              onPress={() => navigation.navigate('addProfessional')} 
              style={styles.button}
              />
        </View>
     
      </View>
    </SafeAreaView>
  );
};
export default Location;
