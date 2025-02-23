import React from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import LoyaltyCard from '../../components/loyaltyCard/loyaltyCard';
import { usedPointData } from '../../staticData';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const UsedPoints = () => {

    const renderItem = ({item , index}) => (
        <LoyaltyCard
        key={item.id}
        points={item.points}
        expiryDate={item.expiryDate}
      />
    )
  return (
    <FlatList
    data={usedPointData}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    contentContainerStyle={{marginTop:hp(2)}}
    />
      
  );
};

export default UsedPoints;