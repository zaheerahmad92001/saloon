import React, { useState } from 'react';
import {View , Text, StyleSheet, Pressable} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fontsFamily from '../assets/fontsFamily';
import { graphTabs } from '../staticData';

const GraphTabs=(props)=>{
    const {setActiveTab} = props
    const [selectedTab , setSelectedTab] = useState(graphTabs.sales)

    const onSalePress = ()=>{
        setSelectedTab(graphTabs.sales);
        setActiveTab(graphTabs.sales);
    }
    const onCustomerPress = ()=>{
        setSelectedTab(graphTabs.customers);
        setActiveTab(graphTabs.customers);
    }
    const isSaleSelected = selectedTab === graphTabs.sales
    const isCustomerSelected = selectedTab === graphTabs.customers
        
    return(
        <View style={styles.container}>
            <Pressable onPress={onSalePress} style={isSaleSelected?[styles.tabContainer,{backgroundColor:colors.primary}]: [styles.tabContainer]}>
               <Text style={isSaleSelected? [styles.textStyle , {color:colors.white}]: [styles.textStyle]}>Sales</Text>
            </Pressable >

            <Pressable onPress={onCustomerPress} style={isCustomerSelected?[styles.tabContainer,{backgroundColor:colors.primary}]: [styles.tabContainer]}>
            <Text  style={isCustomerSelected? [styles.textStyle , {color:colors.white}]: [styles.textStyle]} >Customers</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:hp(1.5),
        flexDirection:'row',
        alignItems:'center',
        gap:wp(3),
        paddingHorizontal:wp(2),
    },
    tabContainer:{
        width:wp(25),
        backgroundColor:'transparent',
       alignItems:'center',
       paddingVertical:8,
       borderRadius:5,
    },
    textStyle:{
        color:colors.lightBlack,
        fontSize:14, 
        fontFamily:fontsFamily.regular,
        fontWeight:'500',
    }
}) 

export default GraphTabs;