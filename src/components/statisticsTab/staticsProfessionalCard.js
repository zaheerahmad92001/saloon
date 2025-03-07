import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Pressable } from "react-native";
import images from "../../assets/images";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
import { LargeText, SmallText } from "../Typography";
const staticsProfessionalCard = (props) => {
  const { onClick } = props;
  return (
    <Pressable onPress={onClick}>
      <View style={[styles.card]}>
        <Image source={images.room} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <LargeText text={'Paityn Lipshutz'} style={styles.name} />
          <SmallText text={'No of Services: 221'} style={styles.details} />
          <SmallText text={'Total Bookings: 89'} style={styles.details} />
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.dotedViewAndText}>
            <View style={styles.greenDotView}></View>
            <SmallText text={'Completed:34'} style={styles.statusText} />
          </View>
          <View style={styles.dotedViewAndText}>
            <View style={styles.redDotView}></View>
            <SmallText text={'Pending:23'} style={styles.statusText} />


          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 5,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.bold
  },
  details: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack
  },
  statusContainer: {
    alignItems: "flex-start",

  },
  statusText: {
    fontSize: RFValue(11),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular
  },

  greenDotView: {
    backgroundColor: colors.green,
    height: 10,
    width: 10,
    borderRadius: 3,
  },
  redDotView: {
    backgroundColor: colors.red,
    height: 10,
    width: 10,
    borderRadius: 3,
  },
  dotedViewAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 3
  }
});

export default staticsProfessionalCard;