import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, Pressable } from 'react-native';
import Star from '../../assets/svgs/star.svg';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import MoreIcon from '../../assets/svgs/more.svg'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import PincilIcon from '../../assets/svgs/edit.svg';
import TrashIcon from '../../assets/svgs/trash.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const ServiceManagementCard = (props) => {

  const { item, onEdit, onDelete,onAssign, handleOnPress } = props;
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOnEditPress = () => {
    closeMenu();
    onEdit();
  };

  const handleOnDeletePress = () => {
    closeMenu();
    setTimeout(() => {
      onDelete();
    }, 500);
  };





  return (
    <View style={[styles.serviceCard]}>
      <View>
        <Text style={styles.serviceTitle}>Pedicure</Text>
        <View style={[styles.ratingSubContainer, { gap: 15 }]}>
          <Text style={styles.price}>Price: SAR 10</Text>
          <View style={[styles.ratingSubContainer]}>
            <Star />
            <Text style={styles.ratingText}>4.7</Text>
            <Text style={styles.ratingCount}>(312)</Text>
          </View>
        </View>
        <View style={styles.ratingSubContainer}>
          <Text style={styles.estimatedTime}>Estimated Time:</Text>
          <Text style={[styles.price, { marginLeft: 5, }]}>30 Mins</Text>
        </View>
      </View>
      <View style={styles.AssignContainer}>
        <Pressable style={styles.AssignView} onPress={()=>onAssign()}>
          <Text style={styles.AssignText}>Pending</Text>
        </Pressable>
        <Pressable onPress={openMenu}>
          <MoreIcon />
        </Pressable>
      </View>



      {/* Menu  */}

      <View style={{ position: 'absolute', right: 0, top: hp(5) }}>
        <TouchableWithoutFeedback onPress={closeMenu}>
          <Menu visible={visible} onRequestClose={closeMenu}>
            <MenuItem onPress={handleOnEditPress}>
              <View style={styles.rowCenter}>
                <PincilIcon />
                <Text style={styles.menuItemText}>Edit</Text>
              </View>
            </MenuItem>
            <MenuDivider />
            <MenuItem onPress={handleOnDeletePress}>
              <View style={styles.rowCenter}>
                <TrashIcon />
                <Text style={styles.menuItemText}>Delete</Text>
              </View>
            </MenuItem>
          </Menu>
        </TouchableWithoutFeedback>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  serviceCard: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  serviceTitle: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
    color: colors.appBlack,
  },
  price: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.Pregular,
    fontWeight: '400',
    color: colors.lightBlack,
    marginVertical: 2,
  },
  estimatedTime: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.Pregular,
    fontWeight: '500',
  },
  ratingText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.Pregular,
    marginHorizontal: 5,
  },
  ratingCount: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.Pregular,
    color: colors.lightBlack,
  },
  ratingSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.lightBlack,
    backgroundColor: colors.white,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  menuStyle: {
    backgroundColor: colors.white,
  },
  menuItemText: {
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(12),
    marginLeft: wp(2.5),
  },
  menuItem: {
    height: 30,

    justifyContent: 'center',
  },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  AssignContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  AssignView: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: colors.darkGray
  },
  AssignText: {
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(8)
  }
});
export default ServiceManagementCard;
