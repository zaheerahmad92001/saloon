import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './complaints.styles';
import Header from '../../components/appHeader';
import {complaints} from '../../staticData';
import { AppButton } from '../../components/appButton';

const ComplaintsRequestScreen = ({navigation, route}) => {

const handleOnPress = (item) => {
  navigation.navigate('complaintDetail',{scene:item?.name})
}

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Request or Complaints'} showBackButton onBackPress={() => navigation.goBack()} />
      <View style={styles.wraper}>
        <View style={styles.contentContainer}>
        <View style={styles.rowContainer}>

          {complaints.map((item, index) => {
            return (
              <Pressable onPress={()=>handleOnPress(item)} style={styles.box}>
                <Text style={styles.statusText}>{item.name}</Text>
                <View style={styles.innerRoundedBox}>
                  <Text style={styles.innerTextValue}>{item.value}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
        <AppButton
         onPress={()=>navigation.navigate('addNewComplaint')}
         title={'Add Request or Complaints'} style={styles.button} 
         />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ComplaintsRequestScreen;
