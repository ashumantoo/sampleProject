import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const SignInScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>SignIn Screen</Text>
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