import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { SmallText } from '../Typography';
import RightArrow from '../../assets/svgs/arrow-right.svg';
import FastImage from 'react-native-fast-image';


const MenuItem = ({title, Icon, showImage, showIcon , onPress , style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.menuItem,style]}>
      <View style={styles.menuItemsTitleCard}>
        {showIcon && <Icon/>}
        {showImage &&
        <View style={styles.imageContainer}>
          <FastImage source={Icon}
          style={styles.imageStyle}
           resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        }
        <SmallText text={title} style={styles.menuText} />
      </View>
      <RightArrow/>
    </TouchableOpacity>
  );
};

const styles = {
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal:10,
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemsTitleCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer:{
    width: 34,
    height: 34,
    overflow:'hidden',
  },
  imageStyle: {
   width:null,
   height:null,
   flex:1,
  },
  menuText: {
    fontSize: RFValue(13),
    fontFamily:fontsFamily.extraLight,
    fontWeight: '500',
    color: colors.lightBlack,
    marginLeft:18,
  },
};

export default MenuItem;
