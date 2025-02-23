import React from 'react';
import {FlatList} from 'react-native';
import LoyaltyCard from '../../components/loyaltyCard/loyaltyCard';
import { allPointData } from '../../staticData';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AllPoints = () => {

const renderItem = ({item , index}) => (
    <LoyaltyCard
    key={item.id}
    points={item.points}
    expiryDate={item.expiryDate}
  />
)

  return (
    <FlatList
    data={allPointData}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    contentContainerStyle={{marginTop:hp(2)}}
    />
      
  );
};

export default AllPoints;