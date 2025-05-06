import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { accessAbilityLabelToKeyMap, labelToKeyMap, scheduleTimePeriod, settingsEnum } from './staticData';

export const pickImageFromLibrary = async onImagePicked => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    maxWidth: 1024,
    maxHeight: 1024,
    quality: 0.8,
    // includeBase64:true,
  });

  if (!result.didCancel && result.assets) {
    onImagePicked(result.assets[0]); // Return selected image data to parent
  }
};

export const captureImageWithCamera = async onImagePicked => {
  const result = await launchCamera({
    mediaType: 'photo',
    maxWidth: 1024,
    maxHeight: 1024,
    quality: 0.8,
    cameraType: 'front',
    includeBase64: true,
  });

  if (!result.didCancel && result.assets) {
    onImagePicked(result.assets[0]); // Return captured image data to parent
  }
};

export const NextFourDays = () => {
  const dates = Array.from({length: 5}, (_, i) =>
    moment().add(i, 'days').format('YYYY-MM-DD'),
  );
  return dates;
};

export const CurrentMonthDates = () => {
  const startOfMonth = moment().startOf('month');
  const endOfMonth = moment().endOf('month');

  const dates = [];
  let currentDate = startOfMonth.clone();

  while (currentDate.isSameOrBefore(endOfMonth, 'day')) {
    dates.push(currentDate.format('YYYY-MM-DD'));
    currentDate.add(1, 'day');
  }

  return dates;
};

export const convertTo12HourFormat = isoString => {
  const date = new Date(isoString);
  const options = {hour: 'numeric', minute: '2-digit', hour12: true};
  return date.toLocaleTimeString('en-US', options);
};

export const signUpFormValide = (
  phoneNumber,
  phoneInput,
  salonName,
  ownerName,
  address,
  email,
) => {
  let valid = true;
  let errors = {
    phoneNumber: '',
    ownerName: '',
    address: '',
    salonName: '',
    email: '',
  };

  // 🔸 Validate phone number
  if (!phoneNumber || !phoneInput?.current?.isValidNumber(phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
    valid = false;
  }

  if (!salonName.trim()) {
    errors.salonName = 'Salon name is required';
    valid = false;
  }

  if (!ownerName.trim()) {
    errors.ownerName = 'Owner name is required';
    valid = false;
  }

  // 🔸 Make email mandatory and validate format
  if (!email?.trim()) {
    errors.email = 'Email is required';
    valid = false;
  } else {
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Invalid email address';
      valid = false;
    }
  }

  if (!address.trim()) {
    errors.address = 'Address is required';
    valid = false;
  }

  return {valid, errors};
};


// export const signUpFormValide = (
//   phoneNumber,
//   phoneInput,
//   salonName,
//   ownerName,
//   address,
//   email,
// ) => {
//   let valid = true;
//   let errors = {
//     phoneNumber: '',
//     ownerName: '',
//     address: '',
//     salonName: '',
//     email: '',
//   };

//   // 🔸 Validate phone number
//   if (!phoneNumber || !phoneInput?.current?.isValidNumber(phoneNumber)) {
//     errors.phoneNumber = 'Invalid phone number';
//     valid = false;
//   }

//   if (!salonName.trim()) {
//     errors.salonName = 'Salon name is required';
//     valid = false;
//   }

//   if (!ownerName.trim()) {
//     errors.ownerName = 'Owner name is required';
//     valid = false;
//   }

//   // Optional but format-validated fields
//   if (email?.trim()) {
//     const trimmedEmail = email.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(trimmedEmail)) {
//       errors.email = 'Invalid email address';
//       valid = false;
//     }
//   }
//   if (!address.trim()) {
//     errors.address = 'Address is required';
//     valid = false;
//   }

//   return {valid, errors};
// };

export const professionalFormValidate = (
  name,
  email,
  phone,
  profile,
  speciality,
  experience,
) => {
  let errors = {
    name: '',
    email: '',
    phone: '',
    speciality: '',
    experience: '',
    profile,
  };
  let valid = true;

  if (!name?.trim()) {
    errors.name = 'Name is required';
    valid = false;
  }

  if (!phone?.trim()) {
    errors.phone = 'Phone is required';
    valid = false;
  }

  if (!speciality?.trim()) {
    errors.speciality = 'Specialty is required';
    valid = false;
  }

  if (!experience?.toString().trim()) {
    errors.experience = 'Experience is required';
    valid = false;
  }

  // Optional but format-validated fields
  if (email?.trim()) {
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Invalid email address';
      valid = false;
    }
  }

  if (!profile) {
    (errors.profile = 'profile pic missing'), (valid = false);
  }

  return {valid, errors};
};

// export const validateAndBuildServiceObject = ({
//   salonId,
//   serviceId,
//   price,
//   duration,
//   subServicesData = [],
// }) => {
//   const errors = [];

//   const isValidNumber = val => !isNaN(val) && Number(val) >= 0;

//   if (salonId === undefined || salonId === null || salonId === '') {
//     errors.push('Missing: salonId');
//   }
//   if (serviceId === undefined || serviceId === null || serviceId === '') {
//     errors.push('Missing: serviceId');
//   }

//   if (!isValidNumber(salonId)) errors.push('Invalid: salonId must be a number >= 0');
//   if (!isValidNumber(serviceId)) errors.push('Invalid: serviceId must be a number >= 0');

//   let finalData = {
//     salonId: Number(salonId),
//     serviceId: Number(serviceId),
//   };

//   if (subServicesData.length > 0) {
//     const validatedSubServices = subServicesData.map((item, index) => {
//       const itemErrors = [];
//       const itemPrice = parseInt(item.price?.replace(/\D/g, ''), 10);
//       const itemDuration = parseInt(item.duration?.replace(/\D/g, ''), 10);

//       if (!item.name) itemErrors.push(`Missing: subServiceData[${index}].name`);
//       if (!isValidNumber(itemPrice)) itemErrors.push(`Invalid: subServiceData[${index}].price`);
//       if (!isValidNumber(itemDuration)) itemErrors.push(`Invalid: subServiceData[${index}].duration`);

//       if (itemErrors.length > 0) {
//         errors.push(...itemErrors);
//         return null;
//       }

//       return {
//         name: item.name,
//         price: itemPrice,
//         duration: itemDuration,
//         salonSubServiceStatus: 'Pending',
//       };
//     });

//     if (!errors.length) {
//       finalData.subServiceData = validatedSubServices;
//     }
//   } else {
//     if (price === undefined) errors.push('Missing: price');
//     if (duration === undefined) errors.push('Missing: duration');

//     const parsedPrice = parseInt(price, 10);
//     const parsedDuration = parseInt(duration, 10);

//     if (!isValidNumber(parsedPrice)) errors.push('Invalid: price must be a number >= 0');
//     if (!isValidNumber(parsedDuration)) errors.push('Invalid: duration must be a number >= 0');

//     if (!errors.length) {
//       finalData.price = parsedPrice;
//       finalData.duration = parsedDuration;
//     }
//   }

//   // Return both errors and data
//   return {
//     errors: errors.length > 0 ? errors : null,
//     data: errors.length === 0 ? finalData : null,
//   };
// };

export const validateAndBuildServiceObject = ({
  salonId,
  serviceId,
  price,
  duration,
  subServicesData = [],
}) => {
  const errors = [];

  const isValidNumber = val => !isNaN(val) && Number(val) >= 0;

  // Validate salonId and serviceId
  if (salonId === undefined || salonId === null || salonId === '') {
    errors.push('Missing: salonId');
  } else if (!isValidNumber(salonId)) {
    errors.push('Invalid: salonId must be a number >= 0');
  }

  if (serviceId === undefined || serviceId === null || serviceId === '') {
    errors.push('Missing: serviceId');
  } else if (!isValidNumber(serviceId)) {
    errors.push('Invalid: serviceId must be a number >= 0');
  }

  // Initial final object
  let finalData = {
    salonId: Number(salonId),
    serviceId: Number(serviceId),
  };

  if (subServicesData.length > 0) {
    const validatedSubServices = subServicesData.map((item, index) => {
      const itemErrors = [];
      const itemPrice = parseInt(item.price?.replace(/\D/g, ''), 10);
      const itemDuration = parseInt(item.duration?.replace(/\D/g, ''), 10);

      if (!item.name) itemErrors.push(`Missing: subServiceData[${index}].name`);
      if (!isValidNumber(itemPrice))
        itemErrors.push(`Invalid: subServiceData[${index}].price`);
      if (!isValidNumber(itemDuration))
        itemErrors.push(`Invalid: subServiceData[${index}].duration`);

      if (itemErrors.length > 0) {
        errors.push(...itemErrors);
        return null;
      }

      return {
        name: item.name,
        price: itemPrice,
        duration: itemDuration,
        salonSubServiceStatus: 'Pending',
      };
    });

    if (!errors.length) {
      finalData.subServiceData = validatedSubServices;
      finalData.price = 0;
      finalData.duration = 0;
    }
  } else {
    // Add subServiceData as empty array
    finalData.subServiceData = [];

    if (price === undefined || price === null || price === '') {
      errors.push('Missing: price');
    } else {
      const parsedPrice = parseInt(price, 10);
      if (!isValidNumber(parsedPrice)) {
        errors.push('Invalid: price must be a number >= 0');
      } else {
        finalData.price = parsedPrice;
      }
    }

    if (duration === undefined || duration === null || duration === '') {
      errors.push('Missing: duration');
    } else {
      const parsedDuration = parseInt(duration, 10);
      if (!isValidNumber(parsedDuration)) {
        errors.push('Invalid: duration must be a number >= 0');
      } else {
        finalData.duration = parsedDuration;
      }
    }
  }

  return {
    errors: errors.length > 0 ? errors : null,
    data: errors.length === 0 ? finalData : null,
  };
};

export const convertServiceObjectToFormValues = serviceObject => {
  if (!serviceObject) return null;

  const {
    id,
    salonId,
    serviceId,
    price,
    duration,
    service,
    subService = [],
  } = serviceObject;

  return {
    id,
    salonId,
    serviceId,
    price: price?.toString() ?? '',
    duration: duration?.toString() ?? '',
    service,
    subServicesData: subService.map(item => ({
      ...item,
      price: item.price?.toString() ?? '',
      duration: item.duration?.toString() ?? '',
    })),
  };
};

export const formatDateFromDay = dateObj => {
  const yyyy = dateObj.getFullYear();
  const mm = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const dd = String(dateObj.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const formatSlotsForAvailabilityUpdate = (data, schedulePeriod) => {
  const slots = [];

  Object.entries(data).forEach(([key, slotArray], index) => {
    const salonSlotIds = slotArray.map(slot => slot.id);

    if (schedulePeriod === scheduleTimePeriod.monthly) {
      const date = new Date(key);
      slots.push({
        salonSlotId: salonSlotIds,
        day: '',
        date: date.getDate(),
        // id: index,
      });
    } else if (schedulePeriod === scheduleTimePeriod.weekly) {
      slots.push({
        salonSlotId: salonSlotIds,
        day: key,
        date: 0,
        // id: index,
      });
    }
  });

  return slots;
};

export const convertStringToArray=(str)=>{
  const array = str.split(", ").map(item => item.trim());
  return array;
};


export const populateTogglesFromBackend = (backendData, toggleItems , type) => {
 
  let keyMaps = labelToKeyMap;
  if(type === settingsEnum.NotificationSettings){
    keyMaps =  labelToKeyMap;
  }else if(type === settingsEnum.AccessibilitySettings){
    keyMaps =  accessAbilityLabelToKeyMap;
  }
  return toggleItems.map(item => {

    const key = keyMaps[item.label];
    return {
      ...item,
      isEnabled: backendData?.[key] ?? false, // fallback to false if key not found
    };
  });
};

export const saveToLocalStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`✅ Data saved under key: ${key}`);
  } catch (error) {
    console.error(`❌ Error saving data to AsyncStorage: ${error}`);
  }
};

export const getFromLocalStorage = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`❌ Error retrieving data from AsyncStorage: ${error}`);
    return null;
  }
};

export const removeFromLocalStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`✅ Data removed from key: ${key}`);
  } catch (error) {
    console.error(`❌ Error removing data from AsyncStorage: ${error}`);
  }
};
export const clearLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('🧹 Local Storage Cleared Successfully!');
  } catch (error) {
    console.error('❌ Error Clearing Local Storage:', error);
  }
};
