import React, {useRef} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/appHeader';
import styles from './serviceManagement.style';
import ServiceManagementCard from '../../components/serviceManagementCard';
import {AppButton} from '../../components/appButton';

import ModalComponent from '../../components/modal';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import DeleteModal from '../../components/modal/deleteModal';
import {SmallText} from '../../components/Typography';
const ServiceManagmentScreen = ({navigation, route}) => {
  const modalRef = useRef();

  const handleAssign = () => {
    navigation.navigate('subServiceList');
  };

  const handleEdit = () => {
    //navigation.navigate('editPromotionScreen');
  };

  const openModal = () => {
    if (modalRef?.current) {
      modalRef.current.open();
    }
  };

  const closeModal = () => {
    if (modalRef?.current) {
      modalRef.current.close();
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <ServiceManagementCard
        index={index}
        onEdit={() => handleEdit(item)}
        onDelete={openModal}
        onAssign={handleAssign}
        isPending={index % 2 === 0}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Service Management'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        <View style={styles.wrapper}>
          <SmallText text={`My Salon Services (20)`} style={styles.heading} />

          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
            renderItem={renderItem}
            keyExtractor={item => Math.random()}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
          />

          <AppButton
            onPress={() => navigation.navigate('addNewServiceScreen')}
            title="Add New Service"
            style={styles.buttonStyle}
          />
        </View>
      </View>

      <ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{width: widthPercentageToDP(80)}}>
        <DeleteModal handleDelete={() => {}} handleCancel={closeModal} isService={true} />
      </ModalComponent>
    </SafeAreaView>
  );
};
export default ServiceManagmentScreen;
