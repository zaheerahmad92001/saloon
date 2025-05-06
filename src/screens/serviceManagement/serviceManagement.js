import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/appHeader';
import styles from './serviceManagement.style';
import ServiceManagementCard from '../../components/serviceManagementCard';
import {AppButton} from '../../components/appButton';

import ModalComponent from '../../components/modal';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import DeleteModal from '../../components/modal/deleteModal';
import {SmallText} from '../../components/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {fetchServices} from '../../redux/actions/servicesAction';
import colors from '../../assets/colors';

const ServiceManagmentScreen = ({navigation, route}) => {

  const limit = 10;
  const status = 'Pending';

  const dispatch = useDispatch();
  const {servicesList, pagination, loading, error} = useSelector(state => state.services);
  const {user} = useSelector((state)=>state.auth)
  const salonId = user?.id

  const modalRef = useRef();

  useEffect(() => {
    const fetchSalonService = async () => {
      const response = await dispatch(fetchServices({page:1 , limit ,status ,salonId })).unwrap();
    };
    fetchSalonService();
  }, [dispatch]);

  const handleAssign = (item) => {
    navigation.navigate('subServiceList',{item});
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

  const renderFooter = () => {
    if (!pagination || !pagination.page || !loading) {
      return null;
    }
    if (pagination.page > 1 && loading) {
      return (
        <View style={styles.footerLoader}>
          <ActivityIndicator color={colors.error} size="small" />
        </View>
      );
    }
    return null;
  };
  const renderItem = ({item, index}) => {
    return (
      <ServiceManagementCard
        item={item}
        index={index}
        onEdit={() => handleEdit(item)}
        onDelete={openModal}
        onAssign={()=>handleAssign(item)}
        isPending={index % 2 === 0}
      />
    );
  };

  const loadMore = () => {
      if ( !loading && pagination.page < pagination.totalPages ) {
        dispatch(fetchServices({ page: pagination.page + 1, limit, status , salonId })).unwrap();
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
        <View style={styles.wrapper}>
          <SmallText text={`My Salon Services (${pagination?.totalRecords})`} style={styles.heading} />

          { pagination.page === 1 && loading &&
            <View style={styles.loaderStyle}>
                <ActivityIndicator color={colors.error} size={'small'}/>
            </View>
          }

          <FlatList
            data={servicesList}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
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
        <DeleteModal
          handleDelete={() => {}}
          handleCancel={closeModal}
          isService={true}
        />
      </ModalComponent>
    </SafeAreaView>
  );
};
export default ServiceManagmentScreen;
