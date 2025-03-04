import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, Pressable } from "react-native";

import Downarrow from '../../assets/svgs/down-arrow-light-black.svg'
import styles from "./assignServiceScreen.Style";
import Header from "../../components/appHeader";
import { Divider } from "react-native-paper";
import { AppButton } from "../../components/appButton";
import { BottomSheet } from "../../components/bottomSheet";
import { professionalsData } from "../../staticData";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AssignProfessionalsModel from "../../components/modal/assignProfessional/assignProfessionalBottomSheet";
import DeleteIcon from '../../assets/svgs/professionals.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from "../../assets/colors";



const AssignSubServiceListScreen = ({ navigation, route }) => {


    const cancelHandler = () => {
        hideBottomSheet();
    }

    const doneHandler = () => {
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
        { id: 1, name: "Long Hair cut", price: "Sar 100", duration: "30 mins", selected: false },
        { id: 2, name: "Short Hair cut", price: "Sar 150", duration: "45 mins", selected: false },
    ]);

    const toggleExpand = (id) => {
        setExpandedSubServices((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const toggleSelection = (id) => {
        setSubServices((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };


    return (

        <SafeAreaView style={styles.container}>
            <Header title={'Hair Cut'} showBackButton onBackPress={() => navigation.goBack()}></Header>
            <View style={styles.mainContainer}>
                {/* Main Title */}
                <View style={styles.DeleteView}>
                    <Text style={styles.mainTitle}>Hair Cut</Text>
                    <Pressable onPress={() => { }}>
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
                                            <Pressable style={styles.assignButton} onPress={() => openBottomSheet()}>
                                                <Text style={styles.assignText}>+  Assign Professionals</Text>
                                            </Pressable>
                                        </View>
                                        <View>
                                            {professionalsData.map((item) => (
                                                <View key={item.id} style={styles.listItem}>
                                                    <Image source={item.image} style={styles.profileImage} />
                                                    <View>
                                                        <Text style={styles.nameText}>{item.name}</Text>
                                                        <Text style={styles.timeText}>{item.time}</Text>
                                                    </View>
                                                    <TouchableOpacity onPress={() => removeProfessional(item.id)} style={styles.deleteIcon}>
                                                        <DeleteIcon />
                                                    </TouchableOpacity>
                                                </View>
                                            ))}
                                        </View>

                                        <Pressable
                                            onPress={() => toggleSelection(item.id)}
                                            style={styles.checkboxContainer}>
                                            <View style={{ alignSelf: 'flex-start' }}>
                                                <MaterialIcons
                                                    name={item.selected ? 'check-box' : 'check-box-outline-blank'}
                                                    size={25}
                                                    color={item.selected ? colors.primary : colors.lightBlack}
                                                />
                                            </View>
                                            <Text>
                                                Service timings Depends on professionals working hours
                                            </Text>
                                        </Pressable>
                                    </View>
                                )}
                                
                            </View>
                            
                        );
                    }}
                />
                <AppButton onPress={() => navigation.navigate('addNewServiceScreen')} title="Save" style={styles.buttonStyle} />
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
export default AssignSubServiceListScreen;