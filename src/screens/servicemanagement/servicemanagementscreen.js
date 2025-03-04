import React , { useState , useRef}from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Header from "../../components/appHeader";
import styles from './servicemanagementscreen.style'
import ServiceManagementCard from "../../components/servicemanagementCard/servicemanagementCard";
import ServiceManagementTopRatedCard from "../../components/servicemanagementCard/servicemanagementTopRatedCard";
import { AppButton } from "../../components/appButton";

import ModalComponent from '../../components/modal';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import DeleteModal from '../../components/modal/deleteModal';
const ServiceManagmentScreen =({navigation, route}) => {

    const modalRef = useRef();


    const handleAssign = () => {
        navigation.navigate('subServiceListScreen');
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
    if (index % 2 === 0) {
      return <ServiceManagementCard index={index} 
      onEdit={() => handleEdit(item)}
      onDelete={openModal}
      onAssign={handleAssign}
      />;
    } else {
      return <ServiceManagementTopRatedCard index={index} 
      onEdit={() => handleEdit(item)}
      onDelete={openModal}
      onAssign={handleAssign}
      />;
    }
  };
 

    return (
        <SafeAreaView style={styles.container}>

            <Header
                title={'Service Management'}
                showBackButton
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.mainContainer}>
                <View> 
                    <Text style={styles.serviceCountText}>My Salon Services ({20})</Text>
                </View>
             
              <FlatList
                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
                renderItem={renderItem}
                ></FlatList>
            
              <AppButton onPress={()=> navigation.navigate('addNewServiceScreen')} title="Add New Service" style={styles.buttonStyle} />
 

            </View>


            <ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{width: widthPercentageToDP(80)}}>
        <DeleteModal handleLogout={() => {}} handleCancel={closeModal} />
      </ModalComponent>
        </SafeAreaView>
    );
}
export default ServiceManagmentScreen;