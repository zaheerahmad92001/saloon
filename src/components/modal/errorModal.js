import React from 'react';
import { View, StyleSheet } from 'react-native';
import ApplologyIcon from '../../assets/svgs/appology.svg'
import { LargeText, MediumText, SmallText, XlargeText } from '../Typography';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { AppButton } from '../appButton';

const ErrorModal=(props)=>{
    const {onPress}=props
    return(
        <View>
        <View style={styles.container}>
         <ApplologyIcon/>
         <LargeText text={'We apologies from you for that'} 
           style={[styles.XlargeText,{marginTop:hp(1)}]}
           />
           <LargeText text={'kind of trouble.'} 
           style={styles.XlargeText}
           />
           <MediumText text={'We are gonna resolve the issue as'} 
            style={[styles.smallText,{marginTop:hp(0.4)}]}/>
           <MediumText text={'soon as possible'} style={styles.smallText}/>
        </View>
        <AppButton onPress={onPress} title={'Ok, Got it'} style={{marginTop:hp(2)}}/>

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
    color:colors.lightBlack,
    fontFamily:fontsFamily.Pregular,
    fontWeight:'400',
},
})

export default ErrorModal;