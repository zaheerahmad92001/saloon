import React from 'react';
import { View ,StyleSheet } from 'react-native';
import Config from 'react-native-config';
import Search from '../assets/svgs/search'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '../assets/colors';
import fontsFamily from '../assets/fontsFamily';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = Config;
const ICON_SIZE = widthPercentageToDP(5.4);

const GooglePlacesAutoComplete = ({
  onItemSelect,
}) => {
  // geometry is not used in our any case its required in component
  const PREDIFINED_PLACES = [
    {
      description: 'Sydney, Australia',
      geometry: { location: { lat: 0.0, lng: 0.0 } },
    },
    {
      description: 'Melbourne, Australia',
      geometry: { location: { lat: 0.0, lng: 0.0 } },
    },
    {
      description: 'Brisbane, Australia',
      geometry: { location: { lat: 0.0, lng: 0.0 } },
    },
    {
      description: 'Singapore, Republic of Singapore',
      geometry: { location: { lat: 0.0, lng: 0.0 } },
    },
    {
      description: 'London, United Kingdom',
      geometry: { location: { lat: 0.0, lng: 0.0 } },
    },
  ];
  const customTextInputProps = {
    autoFocus: true,
  };

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search and select your city"
        minLength={2}
        fetchDetails={true}
        onPress={(data, details = null) => {

          const lat = details.geometry.location.lat;
          const lng = details.geometry.location.lng;
          // console.log("Latitude: ", lat);
          // console.log("Longitude: ", lng);
  
          onItemSelect({ id: data, name: data?.description });
        }}
        query={{
          key: REACT_APP_GOOGLE_MAPS_API_KEY,
          language: 'en',
          type: '(cities)',
        }}
        listUnderlayColor="transparent"
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.input,
          predefinedPlacesDescription: styles.listRow,
          row: styles.listRow,
          description: {
            color: colors.appBlack,
          },
        }}
        renderLeftButton={() =><Search width={ICON_SIZE} height={ICON_SIZE} />}
        enablePoweredByContainer={false}
        textInputProps={customTextInputProps}
        predefinedPlaces={PREDIFINED_PLACES}
      />
    </View>
  );
};

const TEXT_COLOR = '#9C9C9C';
const BORDER_COLOR = '#E0E0E0';

export const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    // borderTopColor: BORDER_COLOR,
    // borderBottomColor: BORDER_COLOR,
    // borderLeftColor: 'transparent',
    // borderRightColor: 'transparent',
    marginLeft: widthPercentageToDP(2),
    borderRadius:10,
    borderWidth: 0.5,
    borderColor:colors.gray,
    flex: 0,
    alignItems: 'center',
    // paddingVertical: heightPercentageToDP(0.6),
    paddingHorizontal: widthPercentageToDP(1.5),
  },
  input: {
    color: TEXT_COLOR,
    // borderColor: 'black',
    // borderWidth: 0,
    flex: 1,
    backgroundColor: 'transparent',
    fontFamily: fontsFamily.regular,
    marginStart: widthPercentageToDP(0.6),
    paddingBottom: -heightPercentageToDP(1),
    fontSize: widthPercentageToDP(3.4),
  },
  listRow: {
    fontFamily: fontsFamily.regular,
    fontSize: widthPercentageToDP(3.6),
    // paddingStart: widthPercentageToDP(5),
    // borderBottomColor: '#C6C6C6',
    // borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    marginRight: 5,
  },
});



export default GooglePlacesAutoComplete;
