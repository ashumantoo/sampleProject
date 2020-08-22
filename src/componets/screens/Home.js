import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>React Native Navigation</Text>
            <Text style={styles.headerText}>Home Screen</Text>
            <Button title="next" type="clear" onPress={() => props.navigation.navigate("ChatList")} />
            <View>
                <Button
                    buttonStyle={styles.contactButton}
                    title="Add New Contact"
                    type="solid"
                    onPress={() => props.navigation.navigate("New Contact")}
                />
                <Button
                    buttonStyle={styles.contactButton}
                    title="FlexBox Example"
                    type="solid"
                    onPress={() => props.navigation.navigate("FlexBox")}
                />
            </View>
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
    },
    contactButton: {
        padding:10,
        marginTop:10
    }
});