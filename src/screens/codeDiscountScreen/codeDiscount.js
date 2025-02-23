import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import React from 'react';
import {discounts} from '../../../staticData';
import DiscountCard from '../../../components/discountCard/discountCard';
import Header from '../../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CodeDiscount = () => {
  const handleApply = title => {
    console.log('Discount Applied', `You have applied: ${title}`);
  };

  const renderItem = ({item}) => (
    <DiscountCard
      title={item.title}
      discount={item.discount}
      validity={item.validity}
      remaining={item.remaining}
      onApply={() => handleApply(item.title)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Codes & discount'} showBackButton />
      <Text style={styles.heading}>Codes & discount</Text>
      <FlatList
        data={discounts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: hp(2),
  },
});

export default CodeDiscount;
