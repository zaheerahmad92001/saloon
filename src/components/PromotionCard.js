import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../assets/colors';
import fontsFamily from '../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {SmallText} from './Typography';
import MoreDote from '../assets/svgs/more.svg';
import PincilIcon from '../assets/svgs/edit.svg';
import TrashIcon from '../assets/svgs/trash.svg';

const PromotionCard = props => {
  const {item, onEdit, onDelete ,handleOnPress} = props;
  const {title, max, exp, Icon} = item;

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
    <View style={styles.card}>
      <Icon />
      <View style={styles.cardContent}>
        <SmallText text={title} style={styles.cardTitle} />

        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.subcontent}>{max}</Text>
            <Text style={styles.subcontent}>{exp}</Text>
          </View>
          <Pressable onPress={openMenu}>
            <MoreDote />
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
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: hp(1.5),
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },

  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  subcontent: {
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(9),
    color: colors.lightBlack,
  },
  menuButton: {},
  menuDots: {
    fontSize: 20,
    color: '#666',
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
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
});

export default PromotionCard;
