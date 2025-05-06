import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Pressable,
} from 'react-native';
import Star from '../assets/svgs/star.svg';
import colors from '../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../assets/fontsFamily';
import MoreIcon from '../assets/svgs/more.svg';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import PincilIcon from '../assets/svgs/edit.svg';
import TrashIcon from '../assets/svgs/trash.svg';
import TopRatedIcon from '../assets/svgs/Label.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MediumText, SmallText} from './Typography';

const ServiceManagementCard = props => {
  const {item, onEdit, onDelete, onAssign, handleOnPress, isPending} = props;
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
      <View style={{flex: 1}}>
        <View style={styles.rowCenter}>
          <MediumText
            text={item?.service?.name}
            style={isPending ? {} : [styles.title]}
          />
          {!isPending && <TopRatedIcon />}
        </View>

        <View style={[styles.rowCenter, {gap: 15}]}>
          <SmallText text={isPending? `Price: SAR ${item?.price}` : '3 Sub services'} style={styles.price} />
          <View style={[styles.rowCenter]}>
            <Star />
            <SmallText text={'4.7'} style={styles.ratingText} />
            <SmallText text={'(312)'} style={styles.ratingCount} />
          </View>
        </View>
        {isPending && (
          <View style={styles.rowCenter}>
            <SmallText text={'Estimated Time:'} style={styles.estimatedTime} />
            <SmallText
              text={`${item?.duration} Mins`}
              style={[styles.price, {marginLeft: 5}]}
            />
          </View>
        )}
      </View>

      <View style={styles.rowCenter}>
        {isPending ? (
          <Pressable style={styles.AssignView}>
            <SmallText text={'Pending'} style={styles.AssignText} />
          </Pressable>
        ) : (
          <Pressable onPress={() => onAssign()} style={styles.assignButton}>
            <SmallText
              text={'Assign'}
              style={[styles.AssignText, {color: colors.white}]}
            />
          </Pressable>
        )}

        <Pressable onPress={openMenu}>
          <MoreIcon />
        </Pressable>
      </View>

      {/* Menu  */}

      <View style={{position: 'absolute', right: 0, top: hp(5)}}>
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
  title: {
    marginRight: 7,
  },

  price: {
    color: colors.lightBlack,
    marginVertical: 2,
  },
  estimatedTime: {
    fontFamily: fontsFamily.Pregular,
    fontWeight: 'normal',
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

  assignButton: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
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
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  AssignView: {
    marginLeft: 5,
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: colors.darkGray,
  },
  AssignText: {
    fontWeight: 'normal',
  },
});
export default ServiceManagementCard;
