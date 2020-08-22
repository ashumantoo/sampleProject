import React from 'react';
import { Button, StyleSheet } from 'react-native';

export const CommonButton = (props) => {
    return (
        <Button
            title={props.title}
            onPress={props.onButtonHandler}
        />
    )
}