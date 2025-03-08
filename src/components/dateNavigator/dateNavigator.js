import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import moment from "moment";
import LeftArrow from '../../assets/svgs/arrowleft.svg';
import RightArrow from '../../assets/svgs/arrowRight.svg'
import colors from "../../assets/colors";
const DateNavigator = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const handlePrevious = () => {
    setSelectedDate((prevDate) => moment(prevDate).subtract(1, "day"));
  };

  const handleNext = () => {
    setSelectedDate((prevDate) => moment(prevDate).add(1, "day"));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePrevious}>
       <LeftArrow/>
      </TouchableOpacity>

      <Text style={styles.dateText}>{selectedDate.format("DD MMMM YYYY")}</Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <RightArrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    
    backgroundColor: colors.appBG,
    marginTop:10,
    borderRadius:8,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.darkGray,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DateNavigator;
