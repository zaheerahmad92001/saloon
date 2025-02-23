import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../assets/colors';
import {paymentMethods} from '../../staticData';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {AppButton} from '../appButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SmallText } from '../Typography';
import { useNavigation } from '@react-navigation/native';

const PaymentMethodComponent = ({onSelect}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Payment Method</Text>
        <AppButton title={'Add New Card'} onPress={()=> navigation.navigate('addCard')} />
      </View>

      <View>
        {paymentMethods.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => onSelect(item)}>
                <item.Icon/>
                <SmallText text={item.name} style={styles.text} />
            </TouchableOpacity>
          );
        })}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: wp(4),
    marginTop: hp(3),
    paddingTop: 16,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.inputGray,
    marginBottom: 8,
    gap:16,
  },
  text: {
    fontSize: RFValue(13),
    fontWeight:'500',
  },
});

export default PaymentMethodComponent;
