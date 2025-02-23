import { Image, Text, View , StyleSheet, Pressable} from "react-native";
import images from '../../assets/images';
import StarIcon from '../../assets/svgs/star.svg'
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
const AvailableSlotTimeCard = ({item,isSelected, onPress}) => {
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
          
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item}</Text>
            
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
      margin: 8,
      shadowColor: colors.appBlack,
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 0,
      //backgroundColor: "#F8F8F8",
        flex: 1,
    },
    
    textContainer: {
      flex: 1,
      marginLeft: 3,
    },
    name: {
      fontSize:RFValue(12),
      fontWeight: fontsFamily.bold,
      
    }

    
  });
export default AvailableSlotTimeCard;