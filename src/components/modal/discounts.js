import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import React from 'react';
import {discounts} from '../../staticData';
import DiscountCard from '../../components/discountCard/discountCard';
import Header from '../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CodeDiscount = (props) => {
  const {onApply} = props; 

  return (
    <React.Fragment>
        {
            discounts.map((item, index) => (
                <DiscountCard
                    title={item.title}
                    discount={item.discount}
                    validity={item.validity}
                    remaining={item.remaining}
                    onApply={() => onApply(item.title)}
                />
            ))
        }
    </React.Fragment>
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
