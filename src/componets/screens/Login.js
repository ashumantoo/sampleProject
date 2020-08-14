import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const Login = (props) => {
    return (
        <View style={styles.loginContainer}>
            <Text>
                Login Screen
            </Text>
            <Button
                title="next"
                type="clear"
                onPress={() => props.navigation.navigate("Home")}
            />
            <Button
                title="Go Chat Screen"
                type="clear"
                onPress={() => props.navigation.navigate("Chat")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});