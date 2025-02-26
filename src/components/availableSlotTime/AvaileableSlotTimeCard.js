import {Text, View , StyleSheet, Pressable} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { MediumText } from '../Typography';
const AvailableSlotTimeCard = ({item,isSelected, onPress}) => {
    return (
      <Pressable
      onPress={onPress}
            style={[
                styles.card,
                { borderColor: isSelected ? colors.primary : colors.white, borderWidth: 0.8 },
            ]}
      >
        <View style={styles.card}>

          <View style={styles.textContainer}>
            <MediumText text={item}  style={styles.name}/>

          </View>
        </View>
        </Pressable>
      );
};
const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingHorizontal: 2,
      paddingVertical:5,
      margin: 8,
        flex: 1,
    },

    textContainer: {
      flex: 1,
      marginLeft: 3,
    },
    name: {
      fontSize:RFValue(14),
      fontWeight:'500',

    },


  });
export default AvailableSlotTimeCard;
