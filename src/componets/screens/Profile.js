import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const Profile = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Profile Screen</Text>
            {/* <Button title="next" type="clear" onPress={()=>props.navigation.navigate("ChatList")}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // headerText: {
    //     fontSize: 22
    // }
});