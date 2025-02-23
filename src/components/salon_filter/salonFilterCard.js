import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import colors from "../../assets/colors";
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { RangeSlider } from '@react-native-assets/slider';
import WhiteStar from '../../assets/svgs/whitestar.svg'
import YellowStar from '../../assets/svgs/star.svg'
import {MediumText, SmallText, XlargeText } from "../Typography";
import { AppButton } from "../appButton";

const SalonFilterCard = (props) => {

    const { onCancel, onApply } = props;
    const [selectedCategory, setSelectedCategory] = useState("Salon");
    const [selectedRating, setSelectedRating] = useState(5);
    const [selectedDistance, setSelectedDistance] = useState("1-5 km");


    const categories = ["Salon", "Spa", "Nail Art", "Salon & Spa"];
    const ratings = [5, 4, 3, 2, "All"];
    const distances = ["1 km", "1-5 km", "5-10 km", "10-20 km"];
    const [range, setRange] = useState([0, 500]);
    return (
        <View style={styles.container}>
            <XlargeText text={'Filters'} style={styles.title} />
            <View style={styles.divider}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Category Section */}

                <MediumText text={'Category'} style={styles.sectionTitle}/>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[styles.button, selectedCategory === category && styles.selectedButton]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text style={[styles.buttonText, selectedCategory === category && styles.selectedText]}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Ratings Section */}

                <MediumText text={'Ratings'} style={styles.sectionTitle}/>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {ratings.map((rating) => (
                        <TouchableOpacity
                            key={rating}
                            style={[styles.button, selectedRating === rating && styles.selectedButton]}
                            onPress={() => setSelectedRating(rating)}
                        >

                            <View style={styles.startButtonView}>
                                {selectedRating === rating ? <WhiteStar /> : <YellowStar />}
                                <Text style={[styles.buttonText, selectedRating === rating && styles.selectedText]}>
                                    {rating === "All" ? "All" : rating}
                                </Text>
                            </View>


                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Distance Section */}

                <MediumText text={'Distance'} style={styles.sectionTitle}/>             
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {distances.map((distance) => (
                        <TouchableOpacity
                            key={distance}
                            style={[styles.button, selectedDistance === distance && styles.selectedButton]}
                            onPress={() => setSelectedDistance(distance)}
                        >
                            <SmallText text={distance} style={[styles.buttonText, selectedDistance === distance && styles.selectedText]}/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Price Range Section */}

                <MediumText text={'Price Range'} style={styles.sectionTitle}/>             
              
                    <RangeSlider
                        style={styles.slider}
                        range={range}
                        minimumValue={0}
                        maximumValue={500}
                        step={1}
                        outboundColor={colors.borderPrimary}
                        inboundColor={colors.primary}
                        thumbTintColor={colors.borderPrimary}
                        onValueChange={(newRange) => setRange(newRange)}

                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                    />


                <View style={styles.priceInputs}>
                    <TextInput style={styles.input} value={`Sar ${range[0]}`} editable={false} />
                    <Text style={styles.dash}>-</Text>
                    <TextInput style={styles.input} value={`Sar ${range[1]}`} editable={false} />
                </View>

                <View style={styles.divider}></View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <AppButton title="Cancel" onPress={onCancel} style={styles.cancelButton} textstyle={styles.cancelText}  />
                    <AppButton title="Apply" onPress={onApply} style={styles.applyButton}  />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.appBG,
    },
    divider: {
        borderWidth:1,
        borderColor:colors.grayBorder,
        marginTop: 10
    },
    sectionTitle: {
        fontWeight:'500',
        textAlign:'left',
        marginTop: 10,
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    button: {
        backgroundColor: colors.darkGray,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10
    },
    selectedButton: {
        backgroundColor: colors.primary,

    },
    buttonText: {
        color: colors.lightBlack,
        fontWeight: '600'
    },
    selectedText: {
        color: colors.white,
    },
    startButtonView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        gap: 10
    },
    priceInputs: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,


    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.grayBorder,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
        fontFamily: fontsFamily.regular,
        fontWeight: '400',
        fontSize: RFValue(14),
        color: colors.lightBlack,
    },
    dash: {
        fontSize: 18,
        marginHorizontal: 10,
        color: colors.darkGray,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        gap:20,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: colors.lighterPrimary,
        borderColor:colors.lighterPrimary,
        flex:1,

    },
    applyButton: {
        flex:1
    },
    cancelText: {
        color: colors.primary,
    },
    applyText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },

    slider: {
        width: "100%",
        height: 40,
        marginLeft: 0,
        marginRight: 0
    },
    track: {
        height: 8,
        borderRadius: 5,
        marginLeft: 12,
        marginRight: 12
    },
    minimumTrack: {
        backgroundColor: colors.borderPrimary, 
    },
    maximumTrack: {
        backgroundColor: colors.borderPrimary, 
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.primary, // Knob color
        borderWidth: 1,
        borderColor: colors.primary,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        elevation: 0,
    },
    valueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },

    whiteStar: {
        color: colors.white,
    },

});

export default SalonFilterCard;