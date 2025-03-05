import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Pressable } from 'react-native';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import MedalStar from '../../assets/svgs/medalStar.svg';
import Star from '../../assets/svgs/star.svg';
import MoreIcon from '../../assets/svgs/more.svg'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import PincilIcon from '../../assets/svgs/edit.svg';
import TrashIcon from '../../assets/svgs/trash.svg';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ServiceManagementTopRatedCard = (props) => {
    const { item, onEdit, onDelete,onAssign, handleOnPress } = props;


    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleOnEditPress = () => {
        closeMenu();
        onEdit();
    };

    const handleOnDeletePress = () => {
        closeMenu();
        setTimeout(() => {
            onDelete();
        }, 500);
    };
    return (
        <View>
            <View style={styles.serviceCard}>
                <View>
                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceTitle}>Hair Cut</Text>
                        <View style={styles.rateContainer}>
                            <MedalStar />
                            <Text style={styles.topRatedText}>Top Rated</Text>
                        </View>
                    </View>

                    <View style={styles.subHeadings}>
                        <Text style={styles.subServices}>3 Sub services</Text>
                        <View style={styles.ratingContainer}>
                            <Star />
                            <Text style={styles.ratingText}>4.7</Text>
                            <Text style={styles.ratingCount}>(312)</Text>
                        </View>
                    </View>
                </View>
                 <View style={styles.AssignContainer}>
                        <Pressable style={styles.AssignView} onPress={()=>onAssign()}>
                          <Text style={styles.AssignText}>Assign</Text>
                        </Pressable>
                        <Pressable onPress={openMenu}>
                          <MoreIcon />
                        </Pressable>
                      </View>


            </View>


            {/* Menu  */}

            <View style={{ position: 'absolute', right: 0, top: hp(5) }}>
                <TouchableWithoutFeedback onPress={closeMenu}>
                    <Menu visible={visible} onRequestClose={closeMenu}>
                        <MenuItem onPress={handleOnEditPress}>
                            <View style={styles.rowCenter}>
                                <PincilIcon />
                                <Text style={styles.menuItemText}>Edit</Text>
                            </View>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={handleOnDeletePress}>
                            <View style={styles.rowCenter}>
                                <TrashIcon />
                                <Text style={styles.menuItemText}>Delete</Text>
                            </View>
                        </MenuItem>
                    </Menu>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};
export default ServiceManagementTopRatedCard;

const styles = StyleSheet.create({
    serviceCard: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginBottom: 5,
    },
    serviceTitle: {
        fontSize: RFValue(13),
        fontFamily: fontsFamily.regular,
        fontWeight: '500',
        color: colors.appBlack,
    },
    price: {
        fontSize: RFValue(13),
        fontFamily: fontsFamily.Pregular,
        fontWeight: '400',
        color: colors.lightBlack,
        marginVertical: 2,
    },
    estimatedTime: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.Pregular,
        fontWeight: '500',
    },
    ratingText: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.Pregular,
        marginHorizontal: 5,
    },
    ratingCount: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.Pregular,
        color: colors.lightBlack,
    },
    ratingSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    subServices: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.regular,
        color: colors.lightBlack,
        marginVertical: 2,
    },

    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    expandButton: {
        padding: 5,
        backgroundColor: colors.primary,
        borderRadius: 50,
    },
    expandText: {
        fontSize: RFValue(12),
        color: colors.appBlack,
    },

    subHeadings: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rateContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        backgroundColor: colors.ratedBox,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    topRatedText: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.regular,
    },
    cardStyle: {
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 0,
    },

    menuStyle: {
        backgroundColor: colors.white,
    },
    menuItemText: {
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        marginLeft: wp(2.5),
    },
    menuItem: {
        height: 30,

        justifyContent: 'center',
    },
    rowCenter: { flexDirection: 'row', alignItems: 'center' },

    AssignContainer: { 
        flexDirection: 'row',
         alignItems: 'center',
         
         },
         AssignView:{
          marginHorizontal:5,
          paddingHorizontal:10,
          paddingVertical:4,
          borderRadius:5,
          backgroundColor:colors.primary
         },
         AssignText:{
          color:colors.white,
          fontFamily:fontsFamily.regular,
          fontSize:RFValue(8)
         }
});

