import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>React Native Navigation</Text>
            <Text style={styles.headerText}>Home Screen</Text>
            <Button title="next" type="clear" onPress={()=>props.navigation.navigate("ChatList")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 22
    }
});