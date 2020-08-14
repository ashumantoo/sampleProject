import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { FAButton } from '../common/FAButton';

export const ChatList = (props) => {
    const handleFabClick = () => {
        console.log("FAB button clicked");
    }
    return (
        <View style={styles.chatListContainer}>
            <Text>
                ChatList Screen
            </Text>
            <Button title="next" type="clear" onPress={() => props.navigation.navigate("Chat")} />
            <FAButton style={""} onClick={handleFabClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    chatListContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});