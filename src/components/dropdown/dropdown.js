import { Text, View } from "react-native";
import React from "react";
import {StyleSheet} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";


const MyDropdown = ({labelField, placeholder, value, data, onChange}) => {
   return (
    <View style={styles.container}>
       <Dropdown 
      style={styles.dropdown}
      data={data}
      placeholder={placeholder || 'Select an option'}
      labelField="label" 
      valueField="value"
      value={value}
      onChange={onChange}
      maxHeight={300}
      minHeight={200}
      fontFamily={fontsFamily.regular}
      iconStyle = {styles.iconStyle}
      placeholderStyle = {styles.placeholderStyle}
      selectedTextStyle = {styles.selectedTextStyle}
      containerStyle = {styles.dropDownContainerStyle}
      itemContainerStyle = {{
        paddingVertical:0,
        marginVertical: 0,
        
      }}
      itemTextStyle={{
        fontSize: 14, // Adjust font size
        paddingVertical:0, // Reduce text padding
      }}
      
       />
    </View>
   );
};


const styles = StyleSheet.create({
   container:{
    // margin:5,
    // borderRadius:10

   },
   dropdown:{
    height: 50,
    borderWidth: 0,
    borderColor:colors.grayBorder,
    borderRadius: 7,
    backgroundColor:colors.darkGray,
    fontFamily:fontsFamily.regular,
    fontSize:RFValue(15),
   
    
   },
   iconStyle: {
    marginRight: 15,
  },
  dropDownContainerStyle:{
    borderRadius:5,
    backgroundColor:colors.lightGray,
    
  },
  placeholderStyle : {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontsFamily:fontsFamily.regular,
    marginLeft:10
  },
  selectedTextStyle : {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontsFamily:fontsFamily.regular,
    marginLeft:10
  }
  });
  export default MyDropdown;