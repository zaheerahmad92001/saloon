import { Image, Text, View , StyleSheet, Pressable} from "react-native";
import images from '../../assets/images';
import StarIcon from '../../assets/svgs/star.svg'
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
const ChangeProfessionalCard = ({item,isSelected, onPress}) => {
  //const {item,isSelected, onPress} = props;
    return (
      <Pressable
      onPress={onPress} // Handle selection
            style={[
                styles.card,
                { borderColor: isSelected ? colors.primary : colors.white, borderWidth: 0.8 }, 
            ]}
      >
        <View style={styles.card}>
          {/* Profile Image */}
          <Image
            source={images.room} 
            style={styles.profileImage}
          />
    
          {/* Name & Profession */}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.profession}>{item.profession}</Text>
          </View>
    
          {/* Rating */}
          <View style={styles.ratingContainer}>
           <StarIcon/>
            <Text style={styles.rating}>4.7</Text>
          </View>
        </View>
        </Pressable>
      );
}
const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 2,
      margin: 6,
      shadowColor: colors.appBlack,
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
      fontSize:RFValue(10),
      fontWeight: fontsFamily.regular,
    },
    profession: {
      fontSize: RFValue(10),
      color: colors.lightBlack,
      marginTop: 3,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    rating: {
      fontSize: RFValue(10),
      fontWeight: fontsFamily.bold,
      marginLeft: 5,
      color: colors.appBlack,
    },
  });
export default ChangeProfessionalCard;