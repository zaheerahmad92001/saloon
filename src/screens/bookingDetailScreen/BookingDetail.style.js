import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({

  contentContainer: {
    backgroundColor: colors.appBG,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  cancelButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
  },
  cancelText: {
    color: colors.primary,
  },
  cancelBookingButton: {
    backgroundColor: 'transparent',
    marginHorizontal: wp(4),
    marginTop:hp(1)
  },
  cancelBookingText: {
    color: colors.primary,
  },
  rescheduleButton: {
    flex: 1,
  },
  rescheduleText: {
    color: colors.white,
  },
});

export default styles;
