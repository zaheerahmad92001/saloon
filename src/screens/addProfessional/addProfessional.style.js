import  {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'; 

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:colors.white,
  },
  container:{
    flex:1,
    backgroundColor:colors.appBG,
  },
  contentContainer:{
    flex:1,
    marginHorizontal:wp(4),
  },
  
  inputStyle:{marginBottom:10},
  inputConainer:{marginTop:hp(2.5)},

  actionView:{
    marginTop:hp(2),
    flexDirection:'row',
    alignItems:'center',

  },

  imageContainer:{
    width:85,
    height:85,
    overflow:'hidden',
    borderRadius:10,
  },
  image:{
    width:null,
    height:null,
    flex:1,
  },
  emptyImageContainer:{
    width:85,
    height:85,
    borderRadius:10,
    backgroundColor:colors.lighterPrimary,
    alignItems:'center',
    justifyContent:'center',
  },

  actionContainer:{
    marginLeft:wp(3),
    gap:10
  },
  button:{
    marginBottom:hp(1),
    marginHorizontal:wp(4),
  }
 
})
export default styles;