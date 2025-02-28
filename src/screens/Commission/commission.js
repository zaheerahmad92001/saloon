import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from '../../components/appHeader';
import styles from './commission.style';


const CommissionScreen = ({navigation, route}) => {
 

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

export default CommissionScreen;
