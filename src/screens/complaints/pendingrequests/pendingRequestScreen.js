import React from "react";
import Header from "../../../components/appHeader";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import style from '../../complaints/pendingrequests/pendingRequestScreen.style';
import PendingCard from '../../../components/pendingComplaintCard/pendingComplaintCard'
//import FilterIcon from "../../../assets/svgs/";
//import {PendingRequestkData} from '../../staticData';
const pendingRequestMockData = [
    {
      id: 1,
      RequestID: "#2156054", // Replace with your image path
      complaintDate: '02 Feb 2024',
      salon: 'ABS Salon',
      complainType: 'Service',
      service: "Hair cut",
      description: "Lorem ipsum dolor sit amet consectetur. Vulputate mauris pharetra egvllus.",
      complaintStatus: 'Pending',
    },
  ];
const PendingRequestSCreen = () => {
    const RenderpendingComplaintCard = (Item) => (
        <PendingCard></PendingCard>
    );

    
    return (
        <SafeAreaView style= {style.container}>
            <Header title={'Pending'} showBackButton></Header>
            <View style = {style.mainContainer}>
                <View style = {style.HeaderView}>
                    <Text style={style.statusHeading}>Pending Request</Text>
                    <View style={style.filterView}>
                    <Text>Filter</Text>
                        <Text>Filter</Text>
                    </View>
                </View>
                 <FlatList 
                 data={pendingRequestMockData}
                 keyExtractor={(item) => item.id.toString}
                 renderItem={RenderpendingComplaintCard}>
                 </FlatList>
                {/* //<RenderpendingComplaintCard></RenderpendingComplaintCard> */}


            </View>
        </SafeAreaView>
    );
};
export default PendingRequestSCreen;