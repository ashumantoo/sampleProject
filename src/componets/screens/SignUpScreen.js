import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const SignUpScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>SignUp Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});