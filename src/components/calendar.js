
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import colors from '../assets/colors';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(moment().format('YYYY-MM-DD'));
  const maxFutureDate = moment().add(50, 'months').format('YYYY-MM-DD');

  console.log('selectedDate', selectedDate);
  return (
    <View style={styles.container}>
      <CalendarList
       markingType={"custom"}
      renderHeader={(date) => (
        <Text style={styles.headerText}>
          {moment(date).format('MMMM YYYY')} {/* Formats the month name */}
        </Text>
      )}
      theme={{
          backgroundColor: '#fff',
          calendarBackground: '#fff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#6200ea',
          selectedDayTextColor: '#fff',
          todayTextColor: '#6200ea',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          arrowColor: '#6200ea',
          monthTextColor: '#6200ea',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        // arrowColor: 'black', // Customize arrow color
        // selectedDayBackgroundColor: '#FF5733', // Fallback if markedDates not used
        // selectedDayTextColor: '#FFFFFF',
        // todayBackgroundColor: "transparent",
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
          customStyles: {
            container: {
              backgroundColor: colors.primary, // Custom square background color
              borderRadius: 5, // Slightly rounded corners
            },
            text: {
              color: "white",
              fontWeight: "bold",
            },
          },
        },
      }}
        pastScrollRange={12}
        futureScrollRange={50}
        scrollEnabled={true} 
        showScrollIndicator={true}
        removeClippedSubviews={false}
        windowSize={100}
        maxDate={maxFutureDate}
        pagingEnabled={false}
        horizontal={false}
        onDayPress={(day) => setSelectedDate(day.dateString)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left', // Aligns month name to the left
    paddingLeft: 10, // Adjust left padding as needed
  },
});

export default CustomCalendar;



// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Calendar } from 'react-native-calendars';

// const CustomCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState('');

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.headerText}>Select a Date</Text> */}

//       <Calendar
//         // Custom styling for calendar
//         style={styles.calendar}
//         theme={{
//           backgroundColor: '#fff',
//           calendarBackground: '#fff',
//           textSectionTitleColor: '#b6c1cd',
//           selectedDayBackgroundColor: '#6200ea',
//           selectedDayTextColor: '#fff',
//           todayTextColor: '#6200ea',
//           dayTextColor: '#2d4150',
//           textDisabledColor: '#d9e1e8',
//           arrowColor: '#6200ea',
//           monthTextColor: '#6200ea',
//           textDayFontSize: 16,
//           textMonthFontSize: 18,
//           textDayHeaderFontSize: 14,
//         }}
//         onDayPress={(day) => setSelectedDate(day.dateString)}
//         markedDates={{
//           [selectedDate]: {
//             selected: true,
//             selectedColor: '#6200ea',
//           },
//         }}
//       />

//       {selectedDate ? (
//         <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#f8f9fa',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // padding: 20,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#6200ea',
//   },
//   calendar: {
//     borderRadius: 10,
//     elevation: 4, // Adds shadow on Android
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   selectedDate: {
//     marginTop: 15,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#6200ea',
//   },
// });

// export default CustomCalendar;
