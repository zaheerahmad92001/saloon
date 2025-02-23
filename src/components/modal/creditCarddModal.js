import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import CreditCard from '../creditCard';

const CreditCardModal = props => {
  const {onClose, list ,isSheet} = props;
  return (
    <View>
      <View style={styles.innerContainer}>
        {list.map((item, index) => {
          const isClose = item.day === 'Sunday' ? true : false;
          return (
            <React.Fragment>
              <CreditCard isSheet={isSheet}/>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
    paddingBottom:hp(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: hp(1),
  },
  innerContainer: {},
  dayText: {
    fontWeight: '500',
    marginTop: hp(1),
  },
  text: {
    color: colors.lightBlack,
    fontWeight: '500',
  },
});
export default CreditCardModal;
