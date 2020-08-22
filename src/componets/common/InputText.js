import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const InputText = (props) => {
    return (
        <TextInput
            style={styles.textInput}
            placeholder="Add New Goal"
            onChangeText={props.inputChangeHandler}
            value={props.value}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#009387",
        borderWidth: 1,
        width: 280,
        padding: 8
    }
})