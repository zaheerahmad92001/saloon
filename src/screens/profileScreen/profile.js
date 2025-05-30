import React, {useRef, useState} from 'react';
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
  menuOptions,
  supportOptions,
} from '../../staticData';
import Header from '../../components/appHeader';
import MenuItem from '../../components/menItems/menuItems';
import styles from './profile.styles';
import {
  MediumText,
  XlargeText,
} from '../../components/Typography';
import ModalComponent from '../../components/modal';
import LogoutModal from '../../components/modal/logout';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Camera from '../../assets/svgs/camera.svg';
import { logout } from '../../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Profile = ({navigation, route}) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth)
  
  const [inProgress , setInProgress] = useState(false);

  const handleNavigation = routeName => {
    if (routeName === 'logout') {
      openModal();
    } else if(routeName === 'booking') {
      navigation.navigate('BottomStack',{screen:'Booking'});
    }else{
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

  const handleLogout = ()=>{
   dispatch(logout());
   closeModal()
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Profile'}
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
            <XlargeText text={`${user?.name}`} style={styles.title} />
            <Pressable
              onPress={() => handleNavigation('salonPage')}
              style={styles.viewSalonPageView}>
              <Text style={styles.pageViewText}>View Salon Page</Text>
            </Pressable>
          </View>
        </View>

        <MediumText text={'Salon Information'} style={styles.infoText} />

        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => {
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

        <MediumText text={'Support'} style={styles.supportStyle} />
        {supportOptions.map((option, index) => (
          <MenuItem
            key={index}
            title={option.title}
            Icon={option.img}
            showIcon={true}
            onPress={() => handleNavigation(option.routeName)}
          />
        ))}

        <MediumText text={'Account Managment'} style={styles.supportStyle} />
        {accountManagement.map((option, index) => (
          <MenuItem
            key={index}
            title={option.title}
            Icon={option.img}
            showIcon={true}
            onPress={() => handleNavigation(option.routeName)}
          />
        ))}
      </ScrollView>
      <ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{width: widthPercentageToDP(80)}}>
        <LogoutModal handleLogout={handleLogout} handleCancel={closeModal} />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default Profile;
