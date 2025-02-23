import React from 'react';
import {FlatList} from 'react-native';
import { earnPointData } from '../../staticData';
import LoyaltyCard from '../../components/loyaltyCard/loyaltyCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const EarnedPoints = () => {

    const renderItem = ({item , index}) => (
        <LoyaltyCard
        key={item.id}
        points={item.points}
        expiryDate={item.expiryDate}
      />
    )

  return (
    <FlatList
    data={earnPointData}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    contentContainerStyle={{marginTop:hp(2)}}
    />
      
  );
};

export default EarnedPoints;