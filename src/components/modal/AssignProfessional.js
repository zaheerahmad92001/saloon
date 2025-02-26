import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import ProfessionalsCard from '../ProfessionalsCard/ProfessionalsCard';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import {SmallText, XlargeText} from '../Typography';
import {Divider} from 'react-native-paper';
import {AppButton} from '../appButton';
import Images from '../../assets/images';
import {professionals} from '../../staticData';
import React, {useState} from 'react';

const AssignProfessional = props => {
  const {onAgree, onCancel, isChnagePrrofessional} = props;
  const heading = isChnagePrrofessional
    ? 'Change Professional'
    : 'Assign Professional';
  const buttonTitle = isChnagePrrofessional
    ? 'Update'
    : 'Assign & Confirm Booking';
    const subHeading = isChnagePrrofessional ? 'Change' : 'Assign';

  const [selectedCards, setSelectedCards] = useState([]);

  const toggleSelection = id => {
    setSelectedCards(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id],
    );
  };

  const renderItem = ({item}) => {
    const isSelected = selectedCards.includes(item.id);
    return (
      <ProfessionalsCard
        item={item}
        isSelected={isSelected}
        onPress={() => toggleSelection(item.id)}
      />
    );
  };
  const renderHeader = () => {
    return (
      <View style={styles.card}>
        <Image
          source={Images.anyprofession}
          style={styles.profileIconContainer}
        />
        <View style={styles.textContainer}>
          <SmallText text={'Any Professional'} style={styles.name} />
          <Text style={styles.profession}>Hair Specialist</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <XlargeText text={heading} style={styles.heading} />
      <Divider style={styles.divider} />
      <SmallText
        text={`${subHeading} professional to this customer according to the selected slot and confirm this booking.`}
        style={styles.description}
      />

      <View style={styles.slotContainer}>
        <Text style={styles.slotText}>Customer Selected Slot:</Text>
        <Text style={styles.slotText}>9:00 AM - 10:00 AM</Text>
      </View>

      <View style={{height: hp(52)}}>
        <FlatList
          data={professionals}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={buttonTitle}
          onPress={onAgree}
          style={styles.yesButton}
        />

        <AppButton
          title={'Cancel'}
          onPress={onCancel}
          style={styles.cancelButton}
          textstyle={styles.cancelText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
  },
  divider: {
    borderWidth: 0.1,
    marginTop: hp(1),
    marginBottom: hp(1),
    marginHorizontal: 10,
  },
  subHeading: {
    fontFamily: fontsFamily.bold,
    fontSize: RFValue(14),
    fontWeight: '600',
  },
  description: {
    marginBottom: hp(1.5),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight: 'normal',
  },
  yesButton: {
    marginTop: 10,
  },
  cancelButton: {
    marginTop: hp(1),
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
    marginBottom: 20,
  },
  cancelText: {
    color: colors.primary,
  },

  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.appBG,
  },
  slotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.8,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 13,
    marginBottom: hp(1.5),
  },
  slotText: {
    fontSize: RFValue(9),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  profileIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: RFValue(10),
  },
  profession: {
    fontSize: 14,
    color: '#888',
    marginTop: 3,
  },
  buttonContainer: {
    marginBottom: hp(5),
  },
});

export default AssignProfessional;
