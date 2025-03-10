import React from 'react';
import WorkingHoursTabs from '../../components/WorkingHoursTabs/Index';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import { AppButton } from '../../components/appButton';
const WorkingHoursScreen = ({navigation , route})=>{
    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Working Hours'} showBackButton onBackPress={()=> navigation.goBack()} />
            <View style={styles.mainContainer}>
             <WorkingHoursTabs/>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1,
    },
    mainContainer:{
        flex:1,
        backgroundColor:colors.white,
        padding:20,
    },
    buttonStyle:{
        marginBottom:20,
        marginHorizontal:20,
    },
});
export default WorkingHoursScreen;
