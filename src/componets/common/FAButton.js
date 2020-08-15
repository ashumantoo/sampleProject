import React from 'react';
import { View, TouchableWithoutFeedback, Image, Animated, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const FAButton = (props) => {
    return (
        <View style={[styles.fabContainder, props.style]}>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <Animated.View style={[styles.fabButton, styles.fabButtonMenu]}>
                    <AntDesign name="plus" size={24} color="#fff" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    fabContainder: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20
    },
    fabButton: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#f02a4b",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    fabButtonMenu: {
        backgroundColor: "#f02a4b"
    }
});