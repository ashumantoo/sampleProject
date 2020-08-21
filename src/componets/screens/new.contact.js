import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { globalStyles } from '../../styles/global.styles';
import { Formik } from 'formik';
import * as yup from 'yup';

const newContactSchema = yup.object({
    name: yup.string().required("Name can not be blank"),
    nickName: yup.string("Should only accept string value"),
    mobile: yup.string("mobile can not be blank")
        .required(),
    // .test('is-mobile-correct', "Mobile number should be 10 digit only", (value) => {
    //     return value === 10;
    // }),
    email: yup.string().required("email can not be blank").email(),
    relationShip: yup.string(),
    address: yup.string(),
    occupation: yup.string()
});

export const NewContact = () => {
    // const [values, setValues] = useState()
    const values = {
        name: "",
        nickName: "",
        mobile: "",
        email: "",
        relationShip: "",
        address: "",
        occupation: ""
    }
    return (
        <View style={styles.newContactContainer}>
            <ScrollView>
                <Formik
                    initialValues={values}
                    validationSchema={newContactSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {(props) => (
                        <View>
                            <Input
                                placeholder="Name"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("name")}
                                value={props.values.name}
                                onBlur={props.handleBlur('name')}
                                errorMessage={props.touched.name && props.errors.name}
                            />
                            <Input
                                placeholder="NickName"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("nickName")}
                                value={props.values.nickName}
                                onBlur={props.handleBlur('nickName')}
                                errorMessage={props.touched.nickName && props.errors.nickName}
                            />
                            <Input
                                placeholder="Mobile"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("mobile")}
                                value={props.values.mobile}
                                keyboardType="number-pad"
                                onBlur={props.handleBlur('mobile')}
                                errorMessage={props.touched.mobile && props.errors.mobile}
                            />
                            <Input
                                placeholder="Email"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("email")}
                                value={props.values.email}
                                keyboardType="email-address"
                                onBlur={props.handleBlur('email')}
                                errorMessage={props.touched.email && props.errors.email}
                            />
                            <Input
                                placeholder="Relationship"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("relationShip")}
                                value={props.values.relationShip}
                                onBlur={props.handleBlur('relationship')}
                                errorMessage={props.touched.relationShip && props.errors.relationShip}
                            />

                            <Input
                                placeholder="Address"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("address")}
                                value={props.values.address}
                                onBlur={props.handleBlur('address')}
                                errorMessage={props.touched.address && props.errors.address}
                            />

                            <Input
                                placeholder="Occupation"
                                inputContainerStyle={{ borderBottomColor: "#009387" }}
                                onChangeText={props.handleChange("occupation")}
                                value={props.values.occupation}
                                onBlur={props.handleBlur('occupation')}
                                errorMessage={props.touched.occupation && props.errors.occupation}
                            />

                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Button
                                    buttonStyle={styles.saveButton}
                                    title="Save"
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    newContactContainer: {
        flex: 1,
    },
    saveButton: {
        backgroundColor: "#009387",
    }
});