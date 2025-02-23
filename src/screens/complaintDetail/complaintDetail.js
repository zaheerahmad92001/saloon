import React, { useRef } from 'react';
import Header from '../../components/appHeader';
import { FlatList, Pressable, SafeAreaView, View } from 'react-native';
import style from './complaintDetail.style';
import ComplaintsCard from '../../components/complaintsCard/conplaintsCard';
import Filter from '../../assets/svgs/filter-search.svg';
import { LargeText, MediumText } from '../../components/Typography';
import FilterScreen from '../../components/modal/filterScreen';
import ModalComponent from '../../components/modal/index';


const ComplaintDetail = ({ navigation, route }) => {
 const modalRef = useRef();
  const { scene } = route.params;

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

  const renderItem = Item => <ComplaintsCard />;

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={scene}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={style.wrapper}>
        <View style={style.mainContainer}>
          <View style={style.filterView}>
            <LargeText text={`${scene} Requests`} />
            <Pressable onPress={openModal} style={style.filterIconView}>
              <Filter />
              <MediumText text={'Filter'} style={style.textStyle} />
            </Pressable>
          </View>
          <FlatList
            data={[...Array(10).keys()]}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.contentContainerStyle}
          />
        </View>
      </View>

      <ModalComponent
       ref={modalRef}
        onClose={closeModal}>
        <FilterScreen
          onCancel={closeModal}
          onApply={() => {
            console.log('Apply')
          }}
        />
      </ModalComponent>
    </SafeAreaView>
  );
};
export default ComplaintDetail;
