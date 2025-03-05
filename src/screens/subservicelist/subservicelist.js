import React, { useState,useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Pressable } from "react-native";

import Downarrow from '../../assets/svgs/down-arrow-light-black.svg'
import styles from "./subservicelist.style";
import Header from "../../components/appHeader";
import { Divider } from "react-native-paper";
import { AppButton } from "../../components/appButton";
import { BottomSheet } from "../../components/bottomSheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AssignProfessionalsModel from "../../components/modal/assignProfessional/assignProfessionalBottomSheet";

const SubServiceListScreen = ({ navigation, route }) => {

const cancelHandler=()=>{
    hideBottomSheet();
}

const doneHandler=()=>{
    hideBottomSheet();
    navigation.navigate('assignSubServiceListScreen');
}
    const refRBSheet = useRef();
    const openBottomSheet = () => {
        if (refRBSheet.current) {
          refRBSheet.current.present();
        }
      };
    
      const hideBottomSheet = () => {
        if (refRBSheet.current) {
          refRBSheet.current.dismiss();
        }
      };
  
    const [expandedSubServices, setExpandedSubServices] = useState([]);
    const [subServices, setSubServices] = useState([
        { id: 1, name: "Long Hair cut", price: "Sar 100", duration: "30 mins" },
        { id: 2, name: "Short Hair cut", price: "Sar 150", duration: "45 mins" },
    ]);

    const toggleExpand = (id) => {
        setExpandedSubServices((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (

        <SafeAreaView style={styles.container}>
            <Header title={'Hair Cut'} showBackButton onBackPress={() => navigation.goBack()}></Header>
            <View style={styles.mainContainer}>
                {/* Main Title */}
                <View style={styles.DeleteView}>
                <Text style={styles.mainTitle}>Hair Cut</Text>
                <Pressable onPress={()=>{}}>
                    <Text style={styles.DeleteText}>Delete</Text>
                </Pressable>
                </View>
                {/* Sub Services List */}
                <FlatList
                    data={subServices}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        const isExpanded = expandedSubServices.includes(item.id);

                        return (
                            <View
                                style={[
                                    styles.subServiceContainer,
                                    !isExpanded && styles.collapsedSubServiceContainer,
                                ]}
                            >
                                {/* Sub-Service Header (Collapsible) */}
                                <TouchableOpacity
                                    style={styles.subServiceHeader}
                                    onPress={() => toggleExpand(item.id)}
                                >
                                    <Text style={styles.subServiceTitle}>{`Sub Service ${item.id}`}</Text>
                                    <Downarrow />
                                </TouchableOpacity>

                                {/* Sub-Service Details (Expanded View) */}
                                {isExpanded && (
                                    <View style={styles.subServiceDetails}>
                                        <Divider style={styles.divicerView}></Divider>
                                        <Text style={styles.label}>Name</Text>
                                        <TextInput style={styles.input} value={item.name} editable={true} />

                                        <View style={styles.row}>
                                            <View style={styles.column}>
                                                <Text style={styles.label}>Price</Text>
                                                <TextInput style={styles.input} value={item.price} editable={true} />
                                            </View>
                                            <View style={styles.column}>
                                                <Text style={styles.label}>Estimated Duration</Text>
                                                <TextInput style={styles.input} value={item.duration} editable={true} />
                                            </View>
                                        </View>

                                        {/* Assign Professionals Button */}
                                        <View style={styles.Assineerow}>
                                            <Text style={styles.label}>Assigned Professionals</Text>
                                            <Pressable style={styles.assignButton} onPress={()=>openBottomSheet()}>
                                                <Text style={styles.assignText}>+  Assign Professionals</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                )}
                            </View>
                        );
                    }}
                />
                 <AppButton onPress={()=> {}} title="Save" style={styles.buttonStyle} />
            </View>

            <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={true}
        disableDynamicSizing={true}
        height={hp(80)}
        style={styles.bottomSheetColor}
        sheetModalStyle={styles.bottomSheetColor}
        >
        <AssignProfessionalsModel
          onCancel={cancelHandler}
          onDone={doneHandler}
        //   onClear={clearFilter}
        />
      </BottomSheet>
        </SafeAreaView>
    );
};
export default SubServiceListScreen;