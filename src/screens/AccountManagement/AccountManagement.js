import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';


const AccountManagementScreen = ({navigation, route}) => {
 

  return (

    <SafeAreaView style={styles.container}>
        <Header title={'Account Management'} showBackButton onBackPress={()=> navigation.goBack()}></Header>
        <View style={styles.maincontainer}>
        
       <Text style={styles.sectionTitle}>Account Management</Text>
       <Text style={styles.description}>
            Commission management should be in percentage
       </Text>
       <View>
       <View style={styles.inputContainer}>
         <Text style={styles.label}>Commission Rate <Text style={styles.required}>*</Text></Text>
         <View style={styles.Box}>
            <Text style={styles.percntage}>20%</Text>
         </View>
        
       </View>
       </View>

        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

    
  container: {
    flex: 1,
    backgroundColor: colors.white,
   
  },
  maincontainer: {
    flex: 1,
    backgroundColor: colors.appBG,
    padding:20
   
  },

  sectionTitle: {
    marginTop:30,
    fontSize: RFValue(16),
    fontFamily:fontsFamily.bold,
    marginBottom: 5,
  },
  description: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop:20,
    backgroundColor: colors.white,
    borderRadius: 7,
    paddingVertical: 20,
    paddingHorizontal: 15,
     borderWidth: 1,
    borderColor:colors.grayBorder,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    
  },
  label: {
    fontSize: RFValue(12),
   fontFamily:fontsFamily.medium,
    marginBottom: 5,
  },
  percntage:{
    color:colors.primary
  },
  required: {
    color: 'red',
  },
  Box: {
    backgroundColor: '#f9e6e6',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal:10,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 16,
    color: '#d63333',
    fontWeight: 'bold',
  },
});

export default AccountManagementScreen;
