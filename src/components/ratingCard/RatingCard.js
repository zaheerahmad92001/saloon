import { StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors";
import Star from "../../assets/svgs/star.svg";

const RatingReviewCard=()=> {
    <View style={style.card}>
        <Text>Text</Text>
    </View>
};
const style = StyleSheet.create({
    card: {
        flex:1,
        backgroundColor: colors.primary
    },
    starsRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
});

export default RatingReviewCard;