import { Image, Text, View , StyleSheet, Pressable} from "react-native";
import images from '../../assets/images';
import RoundRightArrrow from '../../assets/svgs/round-arrowright.svg'
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
const MoreCard = (props) => {
  const {item,isSelected, onPress} = props;
    return (
      <Pressable
      onPress={onPress} // Handle selection
            
      >
        <View style={styles.card}>
          {/* Profile Image */}
          <Image
            source={item.img} 
            style={styles.profileImage}
          />
    
          {/* Name & Profession */}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.profession}>{item.value}</Text>
          </View>
          <View style={styles.arrowContainer}>
          <RoundRightArrrow/>
          </View>
          {/* Rating */}
          {/* <View style={styles.ratingContainer}>
           <RoundRightArrrow/>
          </View> */}
        </View>
        </Pressable>
      );
}
const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.cardBG,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal:10,
     
      //margin: 6,
       marginVertical:6,
       
      shadowColor: colors.white,
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 0, 
    },
    profileImage: {
      width: 45,
      height: 45,
      borderRadius: 8,
     
    },
    textContainer: {
      flex: 1,
      marginLeft: 12,
    },
    name: {
      fontSize:RFValue(12),
      fontFamily: fontsFamily.medium,
      
    },
    profession: {
      fontSize: RFValue(9),
      color: colors.lightBlack,
      marginTop: 2,
    },
    arrowContainer: {
      paddingRight:10
    },
    rating: {
      fontSize: RFValue(10),
      fontWeight: fontsFamily.bold,
      marginLeft: 5,
      color: colors.appBlack,
    },
  });
export default MoreCard;