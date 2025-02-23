import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fontsFamily from '../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';

const Header = ({
  title,
  onBackPress,
  showBackButton = false,
  showTitle = true,
  textstyle,
  iconColor
}) => {
  return (
    <View style={[styles.header]}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <View style={styles.leftView}>
            <Ionicons name="chevron-back" size={20} color={iconColor?iconColor :colors.appBlack} />
            <Text style={[styles.backButtonText,textstyle]}>Back</Text>
          </View>
        </TouchableOpacity>
      )}

      {showTitle && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: '600',
    fontFamily: fontsFamily.medium,
    color: colors.appBlack,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: colors.appBlack,
    fontSize: 14,
    fontFamily: fontsFamily.regular,
    fontWeight:'600',
  },
});

export default Header;
