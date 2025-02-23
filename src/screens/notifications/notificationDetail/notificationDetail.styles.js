import { StyleSheet } from 'react-native';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.white,
    },
    container: {
      flex: 1,
      backgroundColor:colors.appBG
    },
    detailContainer:{
        flex:1,
        marginHorizontal:wp(4),
        paddingTop:hp(2),
      },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 6,
      margin: 5,
      padding: 10,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 8,
    },
    headerTextContainer: {
      flex: 1,
      marginLeft: 12,
    },
    salonName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      fontFamily: fontsFamily.regular,
    },
    serviceName: {
      fontSize: 14,
      color: '#666',
      fontFamily: fontsFamily.regular,
    },
    dateTime: {
      fontSize: 12,
      color: '#999',
      fontFamily: fontsFamily.regular,
    },
    refundContainer: {
      alignItems: 'flex-end',
    },
    refundAmount: {
      fontSize: 12,
      fontWeight: '500',
      color: 'red',
      fontFamily: fontsFamily.regular,
      backgroundColor: colors.primaryLite,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 8,
    },
    refundText: {
      fontSize: 12,
      color: 'red',
      fontFamily: fontsFamily.regular,
    },
    refundDate: {
      fontSize: 12,
      fontFamily: fontsFamily.regular,
    },
    serviceDetails: {
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 5,
      padding: 10,
    },
    totalPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: 12,
    },

    reasonContainer: {
    marginTop:hp(0.7),
     minHeight:hp(10),
     borderRadius:5,
     borderWidth:1,
     borderColor:colors.gray,
     backgroundColor:colors.inputGray,
     paddingHorizontal:12,
     paddingVertical:10,
    },
    reasonValue: {
      fontSize: RFValue(12),
      fontWeight:'400',
      color:colors.lightBlack,
      fontFamily: fontsFamily.regular,
    },
   
    smallText: {
        marginBottom: hp(2),
        fontFamily:fontsFamily.bold
      },
      TotalPrice:{
        fontFamily:fontsFamily.bold
      },
      reasonText:{
        marginTop:hp(1),
        fontFamily:fontsFamily.medium
      }
  })
  export default styles;