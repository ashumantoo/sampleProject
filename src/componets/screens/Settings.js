import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Settings = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Settings Screen</Text>
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