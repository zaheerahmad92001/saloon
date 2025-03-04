import React, { useState } from "react";
import { SafeAreaView, Text, View,FlatList,TouchableOpacity, TextInput, Pressable } from "react-native";
import styles from '../AddNewService/addnewservice.style'
import Header from "../../components/appHeader";
import MyDropdown from "../../components/dropdown/dropdown";
import { SmallText, XlargeText } from '../../components/Typography';
import { AppButton } from "../../components/appButton";
const AddNewServiceScreen = ({ navigation, route }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const items = [
        { label: 'Option A', value: '1' },
        { label: 'Option B', value: '2' },
        { label: 'Option C', value: '3' },
        { label: 'Option D', value: '4' },
        { label: 'Option E', value: '5' },
    ];


    const [subServices, setSubServices] = useState([
        { id: 1, name: "Long Hair cut", price: "Sar 100", duration: "30 mins" },
        { id: 2, name: "Short Hair cut", price: "Sar 150", duration: "45 mins" },
      ]);
    
      const addSubService = () => {
        const newId = subServices.length + 1;
        setSubServices([
          ...subServices,
          { id: newId, name: "", price: "", duration: "" },
        ]);
      };
    
      const removeSubService = (id) => {
        setSubServices(subServices.filter((service) => service.id !== id));
      };


    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Add New Service'} showBackButton onBackPress={() => navigation.goBack()}></Header>
            <View style={styles.mainContainer}>
                <Text style={styles.headingText}>Add New Service</Text>
                <View style={styles.subContainer}>
                    <SmallText text={'Select Service'} style={styles.label} />
                    <MyDropdown
                        data={items}
                        value={selectedValue}
                        onChange={item => setSelectedValue(item.value)}
                        placeholder="Select Service"
                    />
                </View>
                <View>
                <FlatList
                    data={subServices}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.subServiceContainer}>
                            <View style={styles.subServiceHeader}>
                                <Text style={styles.subServiceTitle}>{`Sub Service ${item.id}`}</Text>
                                <TouchableOpacity onPress={() => removeSubService(item.id)}>
                                    <Text style={styles.removeText}>Remove</Text>
                                </TouchableOpacity>
                            </View>

                            <TextInput
                                style={styles.input}
                                value={item.name}
                                placeholder="Enter sub-service name"
                                placeholderTextColor=""
                            />

                            <View style={styles.priceDurationContainer}>
                                <TextInput
                                    style={styles.priceInput}
                                    value={item.price}
                                    placeholder="Price"
                                    placeholderTextColor=""
                                />
                                <TextInput
                                    style={styles.durationInput}
                                    value={item.duration}
                                    placeholder="Duration"
                                    placeholderTextColor=""
                                />
                            </View>
                        </View>
                    )}
                />

{/* Add More Button */}
<Pressable style={styles.addMoreButton} onPress={addSubService}>
        <Text style={styles.addMoreText}>Add More</Text>
      </Pressable>

      </View>
      <AppButton onPress={()=>{}} title="Save" style={styles.buttonStyle} />
            </View>
        </SafeAreaView>
    );
}
export default AddNewServiceScreen;