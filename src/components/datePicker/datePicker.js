// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
// } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// //import { MaterialIcons } from "@expo/vector-icons"; // If using Expo
// import CalendarIcon from '../../assets/svgs/calendargray.svg'
// import { widthPercentageToDP } from "react-native-responsive-screen";
// import colors from "../../assets/colors";
// const DatePickerComponent = () => {
//     const [date, setDate] = useState("");
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
//     const showDatePicker = () => {
//       setDatePickerVisibility(true);
//     };
  
//     const hideDatePicker = () => {
//       setDatePickerVisibility(false);
//     };
  
//     const handleConfirm = (selectedDate) => {
//         const formattedDate = selectedDate.toLocaleDateString("en-GB");
//     //   const formattedDate = selectedDate
//     //     ? selectedDate.toLocaleDateString("en-GB")
//     //     : "DD/MM/YYYY";
//       setDate(formattedDate);
//       hideDatePicker();
//     };
  
//     return (
//       <View style = {styles.container}>
//         <TouchableOpacity style = {styles.dateInput} onPress={showDatePicker}>
//           <Text style={[styles.dateText, !date && styles.placeholder]}>
//             {date || "DD/MM/YYYY"}
//           </Text>
//           <CalendarIcon />
//         </TouchableOpacity>
  
//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           onConfirm={handleConfirm}
//           onCancel={hideDatePicker}
//         />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container:{
//         backgroundColor:colors.white,
//         borderRadius:10,
//         borderColor:colors.darkGray,
//         borderWidth: 1
        
        
//     },
//     // label: {
//     //   fontWeight: "bold",
//     //   fontSize: 16,
//     //   marginBottom: 5,
//     // },
//     dateInput: {
//         //width:widthPercentageToDP('75%'),
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       backgroundColor: colors.dateInput,
//       paddingHorizontal: 15,
//       borderRadius:10,
//       height: 50, 
//     },
//     dateText: {
//       fontSize: 16,
//       color: "#333",
//       flex: 1, 
//       textAlignVertical: "center", 
//     },
//     placeholder: {
//       color: "#888",
//     },
//   });
  
//   export default DatePickerComponent;




import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalendarIcon from "../../assets/svgs/calendargray.svg"; 
import ClockIcon from "../../assets/svgs/clock.svg"; 
import colors from "../../assets/colors";

const DateTimePickerComponent = ({ mode, onSelect }) => {
  const [value, setValue] = useState(""); // Stores selected date or time
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showPicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    let formattedValue;
    
    if (mode === "date") {
      formattedValue = selectedDate.toLocaleDateString("en-GB");
    } else {
      formattedValue = selectedDate.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    setValue(formattedValue);
    onSelect(formattedValue); // Pass selected value back to parent screen
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dateInput} onPress={showPicker}>

      {mode === "time" && <ClockIcon style={styles.iconLeft} />}

        <Text style={[styles.dateText, !value && styles.placeholder]}>
          {value || (mode === "date" ? "DD/MM/YYYY" : "HH:MM")}
        </Text>
        {mode === "date" && <CalendarIcon style={styles.iconRight} />}
        {/* <CalendarIcon /> */}
        {/* <ClockIcon/> */}
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode} // Passed as a prop
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    borderColor: colors.darkGray,
    borderWidth: 0,
    padding: 10,
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.dateInput,
    paddingHorizontal: 2,
    borderRadius: 10,
    height: 20,
    marginVertical: 5,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    textAlignVertical: "center",
  },
  placeholder: {
    color: "#888",
  },
  iconLeft: {
    marginRight: 10, // Space after Clock Icon (left)
  },
  iconRight: {
    marginLeft: 0, // Space before Calendar Icon (right)
  },
});

export default DateTimePickerComponent;
