import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import colors from "../assets/colors";

import fontsFamily from '../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { MediumText, SmallText } from '../Typography';
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import images from '../assets/images';
import MoreDote from '../assets/svgs/more.svg';
import TrashIcon from '../assets/svgs/trashgray.svg';
import PincilIcon from '../assets/svgs/editpincil.svg'
import { Menu, Divider, Provider } from "react-native-paper";
const PromotionCard = props => {
   const { title, max, exp, onEdit, onDelete } = props;

   const [visible, setVisible] = useState(false);

   const openMenu = () => setVisible(true);
   const closeMenu = () => setVisible(false);
   return (
      <View style={styles.card}>
         <Image source={images.promotion} style={styles.cardImage} />
         <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.subcontent}>{max}</Text>
            <Text style={styles.subcontent}>{exp}</Text>
         </View>
         {/* <Pressable>
            <MoreDote/>
            </Pressable> */}
         <Menu
           
            visible={visible}
            onDismiss={closeMenu}
            contentStyle={styles.menuStyle}
            anchor={
               <Pressable style={styles.menuButton} onPress={openMenu}>
                 <MoreDote/>
               </Pressable>
            }
         >
            <Menu.Item onPress={() => { closeMenu(); onEdit(item); }} titleStyle={styles.menuItemText} style={styles.menuItem}  title="Edit" leadingIcon={() => <PincilIcon/>} />
            <Divider />
            <Menu.Item onPress={() => { closeMenu(); onDelete(item); }} titleStyle={styles.menuItemText} style={styles.menuItem} title="Delete" leadingIcon={() => <TrashIcon/>} />
         </Menu>


      </View>
   );
}
const styles = StyleSheet.create({
   card: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 12,
      marginBottom: hp(1),
      alignItems: 'center',
   },
   cardImage: {
      width: 50,
      height: 50,
      borderRadius: 8,
      overflow: 'hidden',
      alignSelf: 'flex-start',
      justifyContent: 'center'
   },

   cardContent: {
      flex: 1,
      marginLeft: 12
   },
   cardTitle: {
      fontFamily: fontsFamily.bold,
      maxWidth: '100%',
      fontSize: RFValue(9)
   },
   subcontent: {
      fontFamily: fontsFamily.regular,
      fontSize: RFValue(9),
      color: colors.lightBlack
   },
   menuButton: {
      
      
    },
    menuDots: {
      fontSize: 20,
      color: "#666",
    },
    menuStyle:{
      backgroundColor:colors.white,
     marginTop:-22,
     //height:40
    },
    menuItemText:{
      fontFamily:fontsFamily.regular,
      fontSize:RFValue(9)
    },

    menuItem: {
      height: 30,
      
      justifyContent: "center",
    },
});


export default PromotionCard;