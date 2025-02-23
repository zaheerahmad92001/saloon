import React, { useRef, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, View, Text } from 'react-native';
import styles from "./contractScreen.Style";
import { LargeText } from "../../components/Typography";
import { Checkbox } from 'react-native-paper';
import colors from '../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import Signature from "react-native-signature-canvas";
import { AppButton } from '../../components/appButton';
const ContractScreen = ({ navigation, route }) => {
    const [isChecked, setChecked] = useState(false);

    const signatureRef = useRef(null);
    const [signature, setSignature] = useState(null);


    const handleSignature = (signatureData) => {
        setSignature(signatureData);
    };


    const handleClear = () => {
        signatureRef.current.clearSignature();
        setSignature(null);
    };


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={styles.headerTitle}>Contract</Text>

                    <Text style={styles.textbody}>
                        Lorem ipsum dolor sit amet consectetur. Egestas dui in tellus morbi. Enim nisl lectus mattis laoreet id arcu. Luctus lectus diam iaculis aliquam mus morbi dui pharetra. Condimentum pretium at duis diam.
                        Egestas eu ullamcorper eget viverra in risus. Amet non tincidunt feugiat posuere magna maecenas. Dui sed urna tempus ullamcorper nisl. Sapien tincidunt viverra viverra nisi velit. Ornare id tempus morbi fermentum quam lorem aenean ipsum. Eu turpis tellus ut non consectetur at et ultricies donec. Dictum tortor eu nam placerat amet quis facilisi scelerisque.
                        Habitasse viverra elit massa eget est massa leo quam est. Interdum nibh iaculis scelerisque integer. Pellentesque tincidunt sed vestibulum enim ipsum. Ut nascetur blandit auctor venenatis eu. Tincidunt at 20% Commission. Turpis nulla a proin ut fusce laoreet. Montes curabitur nunc vel lorem pellentesque.
                    </Text>

                    <View style={styles.digitalSignatureLableView}>
                        <Text style={styles.signatureLable}>Digital Signature</Text>
                        <Pressable style={styles.clearView} onPress={handleClear}>
                            <Text style={styles.clearText}>Clear</Text>
                        </Pressable>
                    </View>
                    <View style={styles.SignatureView}>
                        <Signature
                            ref={signatureRef}
                            onOK={() => console.log('signature Capture')}
                            autoClear={false}
                            clearText="Clear"
                            confirmText="Save"
                            webStyle={`.m-signature-pad--footer {display: none;}`}

                        ></Signature>



                    </View>
                    <Text style={styles.drawText}>Draw your signature here</Text>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!isChecked)}
                            color={colors.primary}
                        />
                        <View style={styles.termViews}>
                            <Text style={styles.termsText}>
                                I agree to the anaqq{" "}
                                <Text style={styles.privacyPolicyText}>
                                    Terms of Service
                                </Text>{" "}
                                and{" "}
                                <Text style={styles.privacyPolicyText}>
                                    Privacy Policy
                                </Text>
                            </Text>
                        </View>

                    </View>

                    <AppButton
                        title={'Submit'}
                        disabled={!isChecked}
                        style={styles.signUpButton}
                        textstyle={styles.signUpText}
                        onPress={() => navigation.navigate('contractScreen')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ContractScreen;