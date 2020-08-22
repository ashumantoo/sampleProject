import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export const GoalListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goalList}>
                <Text> {props.title} </Text>
            </View>
        </TouchableOpacity>
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