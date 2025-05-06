import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {offDays, settingsEnum} from '../../staticData';
import OffDaysSelector from '../../components/offDaysSelector/offDaysSelector';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MediumText} from '../../components/Typography';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchSettingByType,
  addSettingsByType,
} from '../../redux/actions/settingsAction';
import {AppButton} from '../../components/appButton';

const OffDays = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading, inProgress , offDaysList} = useSelector((state)=>state.settings);


  const [selectedOffDays, setSelectedOffDays] = useState(offDaysList ?? []);
  const salonId = user?.id;

  useEffect(() => {
    const fetchOffDays = async () => {
      const response = await dispatch(
        fetchSettingByType({type: settingsEnum.OffDays, salonId: salonId}),
      ).unwrap();
    };
    fetchOffDays();
  }, [dispatch, salonId]);

  useEffect(()=>{
    setSelectedOffDays(offDaysList);
  },[offDaysList])

  const handleSelect = offday => {
    setSelectedOffDays(prevSelected => {
      if (prevSelected.includes(offday)) {
        return prevSelected.filter(item => item !== offday);
      } else {
        return [...prevSelected, offday];
      }
    });
  };

  const handleSave = async () => {
    const daysString = selectedOffDays.join(', ');
    let payload = {
      type: settingsEnum.OffDays,
      salonId: salonId,
      days: daysString,
    };
    const response = await dispatch(addSettingsByType(payload)).unwrap();
    console.log('getting response', response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Off Days'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <MediumText
          text="Please select your off days"
          style={styles.headerTitle}
        />
        {loading ?
        <ActivityIndicator 
        color={'red'}
        size={'small'}
        />:
        <FlatList
          data={offDays}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <OffDaysSelector
              label={item}
              selected={
                Array.isArray(selectedOffDays) && selectedOffDays.includes(item)
              }
              onSelect={() => handleSelect(item)}
            />
          )}
        />
        }
        <AppButton title={'Save'} onPress={handleSave} isLoading={inProgress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  headerTitle: {
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(2),
    fontFamily: fontsFamily.regular,
    fontWeight: '600',
    fontSize: RFValue(13),
  },
});

export default OffDays;
