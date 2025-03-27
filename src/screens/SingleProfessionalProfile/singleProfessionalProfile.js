import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../../assets/images';
import {
  scheduleTimePeriod,
  singleProfessionalMenuOptions,
} from '../../staticData';
import Header from '../../components/appHeader';
import MenuItem from '../../components/menItems/menuItems';
import styles from './singleProfessionalProfile.styles';
import {MediumText, XlargeText} from '../../components/Typography';
import Camera from '../../assets/svgs/camera.svg';

const SingleProfessionalProfile = ({navigation, route}) => {

  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [schedulePeriod, setSchedulePeriod] = useState(
    scheduleTimePeriod.weekly,
  );
  const [weeklyDaysSelection, setWeeklyDaysSelection] = useState([]);
  const [monthlyDatesSelection, setMonthlyDatesSelection] = useState([]);

  const handleNavigation = routeName => {
    if (routeName === 'availability') {
      navigation.navigate('professionalSchedule', {isSingleProfessional: true});
    } else {
      navigation.navigate(routeName);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Paityn Lipshutz'}
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <View style={styles.profileContainer}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={images.room}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.editIcon}>
              <Camera />
            </TouchableOpacity>
          </View>

          <View style={styles.titleContainer}>
            <XlargeText text={'Paityn Lipshutz'} style={styles.title} />
            <MediumText
              text={'paitynlipshutz@gmail.com'}
              style={styles.emailstyle}
            />
          </View>
        </View>

        <MediumText text={'Professional Information'} style={styles.infoText} />

        <View style={styles.menuContainer}>
          {singleProfessionalMenuOptions.map((option, index) => {
            return (
              <MenuItem
                key={index}
                title={option.title}
                Icon={option.img}
                showIcon={true}
                onPress={() => handleNavigation(option.routeName)}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleProfessionalProfile;
