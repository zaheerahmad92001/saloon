import React, { useRef } from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './PromotionScreen.Style';
import Header from '../../components/appHeader';
import PromotionCard from '../../components/PromotionCard';
import {promotiondata} from '../../staticData';
import {AppButton} from '../../components/appButton';
import ModalComponent from '../../components/modal';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import DeleteModal from '../../components/modal/deleteModal';
import { MediumText } from '../../components/Typography';

const PromotionScreen = ({navigation, route}) => {
const modalRef = useRef();

  const handleEdit = () => {
    navigation.navigate('editPromotionScreen');
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

  const renderPromotionCard = ({item}) => {
    return (
      <PromotionCard
        item={item}
        onEdit={() => handleEdit(item)}
        onDelete={openModal}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Promotion'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <MediumText text={'Discounts'} style={styles.discountText}/>
          <FlatList
            data={promotiondata}
            renderItem={renderPromotionCard}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <AppButton
        onPress={() => navigation.navigate('addPromotionScreen')}
        title={'Add Discount'}
        style={styles.button}
        textstyle={styles.buttonText}
      />

<ModalComponent
        ref={modalRef}
        onClose={closeModal}
        style={{width: widthPercentageToDP(80)}}>
        <DeleteModal handleDelete={() => {}} handleCancel={closeModal} />
      </ModalComponent>
    </SafeAreaView>
  );
};
export default PromotionScreen;
