import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors';
import { SmallText } from './Typography';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../assets/fontsFamily';


const CheckBox=(props) => {
    const {isChecked, onSelectionChange, setSelectedItems, item} = props;


    const toggleSelection = (item) => {
        setSelectedItems((prevSelected) => {
          const isSelected = prevSelected.includes(item.id);
          const newSelection = isSelected
            ? prevSelected.filter((id) => id !== item.id)
            : [...prevSelected, item.id];
          if (onSelectionChange) {
            onSelectionChange(newSelection);
          }
          return newSelection;
        });
      };
    return(
        <Pressable
        onPress={() => toggleSelection(item)}
        style={styles.checkboxContainer}>
        <View style={{alignSelf: 'flex-start'}}>
          <MaterialIcons
            name={isChecked ? 'check-box' : 'check-box-outline-blank'}
            size={25}
            color={isChecked ? colors.primary : colors.lightBlack}
          />
        </View>
        <View style={styles.termViews}>
          <SmallText text ={item?.value} style={styles.termsText}/>
        </View>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center'
      },
      termViews: {
        marginLeft: 5,
      },
      termsText: {
        color: colors.lightBlack,
      },
})

export default CheckBox;
