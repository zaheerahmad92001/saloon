import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  picker: {
    marginHorizontal: wp(4),
  },
  mapContainer: {
    flex: 1,
    marginTop: hp(2),
  },
  flatlistView: {
    position: 'absolute',
    bottom: 10,
  },
  flatListContainer: {
    gap: 10,
    marginLeft: wp(30),
  },
});
export default styles;
