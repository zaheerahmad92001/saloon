import React, { useRef } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import images from '../../assets/images';
import {
  accountManagement,
  singleProfessionalmenuOptions,
  supportOptions,
} from '../../staticData';
import Header from '../../components/appHeader';
import MenuItem from '../../components/menItems/menuItems';
import styles from './singleProfessionalprofile.styles';
import {
  MediumText,
  XlargeText,
} from '../../components/Typography';
import ModalComponent from '../../components/modal';
import LogoutModal from '../../components/modal/logout';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Camera from '../../assets/svgs/camera.svg';

const SingleProfessionalProfile = ({ navigation, route }) => {
  const modalRef = useRef();

  const handleNavigation = routeName => {
    if (routeName === 'logout') {
      openModal();
    } else if (routeName === 'booking') {
      navigation.navigate('BottomStack', { screen: 'Booking' });
    } else {
      navigation.navigate(routeName);
    }
  };

  const openModal = () => {
    if (modalRef?.current) {
      modalRef.current.open();
    } else {
    }
  };

  const closeModal = () => {
    if (modalRef?.current) {
      modalRef.current.close();
    } else {
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
            <TouchableOpacity onPress={() => { }} style={styles.editIcon}>
              <Camera />
            </TouchableOpacity>
          </View>

          <View style={styles.titleContainer}>
            <XlargeText text={'Paityn Lipshutz'} style={styles.title} />
            <MediumText text={'paitynlipshutz@gmail.com'} style={styles.emailstyle}/>
          </View>
        </View>

        <MediumText text={'Professional Information'} style={styles.infoText} />

        <View style={styles.menuContainer}>
          {singleProfessionalmenuOptions.map((option, index) => {
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
      <ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{ width: widthPercentageToDP(80) }}>
        <LogoutModal handleLogout={() => { }} handleCancel={closeModal} />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default SingleProfessionalProfile;
