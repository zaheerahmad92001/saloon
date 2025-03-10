import React from 'react';
import { View, StyleSheet } from 'react-native';
import ServiceIcon from '../../assets/svgs/serviceAdded.svg'
import { LargeText, MediumText, SmallText, XlargeText } from '../Typography';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { AppButton } from '../appButton';

const ServiceAddedModal=(props)=>{
    const {onPress}=props
    return(
        <View>
        <View style={styles.container}>
         <ServiceIcon/>
           <MediumText text={'The service has been added. Please await admin approval.'} 
            style={[styles.smallText,{marginTop:hp(1.4)}]}/>
        </View>
        <AppButton onPress={onPress} title={'Ok'} style={{marginTop:hp(2)}}/>

        </View>
    )
}
const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems:'center',
},
XlargeText:{
    textAlign:'center',
    fontWeight:'600',
    fontFamily:fontsFamily.Pregular,
},
smallText:{
    textAlign:'center',
    color:colors.appBlack,
    fontFamily:fontsFamily.Pregular,
    fontWeight:'500',
},
})

export default ServiceAddedModal;