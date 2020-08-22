import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const GoalListItem = (props) => {
    return (
        <View style={styles.goalList}>
            <Text> {props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalList: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "#009387",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    }
})