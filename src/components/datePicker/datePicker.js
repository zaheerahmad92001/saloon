import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarIcon from '../../assets/svgs/calendargray.svg';
import ClockIcon from '../../assets/svgs/clock.svg';
import colors from '../../assets/colors';
import Downarrowlightblack from '../../assets/svgs/down-arrow-light-black.svg';

const DateTimePickerComponent = props => {
  const {
    mode,
    onSelect,
    isworkingHours = false,
    slot,
    field,
    routeName,
  } = props;
  const [value, setValue] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showPicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selectedDate => {
    let formattedValue;

    if (mode === 'date') {
      formattedValue =
        routeName === 'booking'
          ? // ? selectedDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }) // MM/DD
            selectedDate.toLocaleDateString('en-US') // MM/DD
          : selectedDate.toLocaleDateString('en-GB'); // DD/MM/YYYY
    } else {
      if (isworkingHours) {
        formattedValue = selectedDate.toISOString(); // saving 
      } else {
        formattedValue = selectedDate.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        });
      }
    }
    let showOnFrontEnd = isworkingHours
      ? selectedDate.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        })
      : formattedValue;

    setValue(showOnFrontEnd);
    onSelect(formattedValue, slot?.id, field); // Pass selected value back to parent screen
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dateInput} onPress={showPicker}>
        {/* Show additional icon if routeName is "booking" */}
        {mode === 'date' && routeName === 'booking' && (
          <CalendarIcon style={styles.iconLeft} />
        )}

        {mode === 'time' && !isworkingHours && (
          <ClockIcon style={styles.iconLeft} />
        )}

        <Text style={[styles.dateText, !value && styles.placeholder]}>
          {value ||
            (mode === 'date'
              ? routeName === 'booking'
                ? 'MM/DD/YYYY'
                : 'DD/MM/YYYY'
              : isworkingHours
              ? '00:00'
              : 'HH:MM')}
        </Text>

        {mode === 'time' && isworkingHours && (
          <Downarrowlightblack style={styles.iconLeft} />
        )}
        {mode === 'date' && routeName !== 'booking' && (
          <CalendarIcon style={styles.iconRight} />
        )}
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.dateInput,
    paddingHorizontal: 2,
    borderRadius: 10,
    height: 20,
    marginVertical: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlignVertical: 'center',
  },
  placeholder: {
    color: '#888',
  },
  iconLeft: {
    marginRight: 10, // Space after the left icon
  },
  iconRight: {
    marginLeft: 0, // Space before the right icon
  },
});

export default DateTimePickerComponent;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,

// } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import CalendarIcon from '../../assets/svgs/calendargray.svg';
// import ClockIcon from '../../assets/svgs/clock.svg';
// import colors from '../../assets/colors';
// import Downarrowlightblack from '../../assets/svgs/down-arrow-light-black.svg';

// const DateTimePickerComponent = (props) => {
//   const {mode, onSelect , isworkingHours = false , slot, field , routeName} = props;
//   const [value, setValue] = useState('');

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showPicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (selectedDate) => {
//     let formattedValue;

//     if (mode === 'date') {
//       formattedValue = selectedDate.toLocaleDateString('en-GB');
//     } else {
//       formattedValue = selectedDate.toLocaleTimeString('en-GB', {
//         hour: '2-digit',
//         minute: '2-digit',
//       });
//     }

//     setValue(formattedValue);
//     onSelect(formattedValue , slot?.id , field); // Pass selected value back to parent screen
//     hideDatePicker();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.dateInput} onPress={showPicker}>

//       {mode === 'time' && (!isworkingHours && <ClockIcon style={styles.iconLeft} />)}

//         <Text style={[styles.dateText, !value && styles.placeholder]}>
//           {value || (mode === 'date' ? 'DD/MM/YYYY' : (isworkingHours ? '00:00' : 'HH:MM'))}
//         </Text>

//         {mode === 'time' && (isworkingHours && <Downarrowlightblack style={styles.iconLeft} />)}
//         {mode === 'date' && <CalendarIcon style={styles.iconRight} />}

//         {/* <CalendarIcon /> */}
//         {/* <ClockIcon/> */}
//       </TouchableOpacity>

//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode={mode} // Passed as a prop
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.darkGray,
//     borderRadius: 10,

//     borderColor: colors.darkGray,
//     borderWidth: 0,

//     padding: 10,
//   },
//   dateInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: colors.dateInput,
//     paddingHorizontal: 2,
//     borderRadius: 10,
//     height: 20,
//     marginVertical: 5,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//     textAlignVertical: 'center',
//   },
//   placeholder: {
//     color: '#888',
//   },
//   iconLeft: {
//     marginRight: 10, // Space after Clock Icon (left)
//   },
//   iconRight: {
//     marginLeft: 0, // Space before Calendar Icon (right)
//   },
// });

// export default DateTimePickerComponent;
