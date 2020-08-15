import React, { useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { FAButton } from '../common/FAButton';
import BottomSheet from 'reanimated-bottom-sheet';
import { useNavigation } from '@react-navigation/native';

export const ChatList = (props) => {
    const sheetRef = useRef(null);
    const navigation = useNavigation();
    const dataList = [
        {
            id: '1',
            name: "John Doe",
            message: "hi,how are you?",
            messageTime: "9:30 AM",
            imageUri: "https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: '2',
            name: "Tom Cruise",
            message: "should be there in 5 min",
            messageTime: "6:00 PM",
            imageUri: "https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        },
        {
            id: '3',
            name: "Will Smith",
            message: "thanks Everyone",
            messageTime: "1 hr ago",
            imageUri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: '4',
            name: "Brad Pitt",
            message: "Send me a mail",
            messageTime: "a day ago",
            imageUri: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        }
    ];

    const Item = (props) => (
        <TouchableOpacity onPress={props.onPress} style={[styles.item, props.style]}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={styles.chatAdvisorImage}
                    source={{ uri: props.item.imageUri }}
                />
                <View>
                    <Text style={styles.title}>{props.item.name}</Text>
                    <Text style={{ marginLeft: 10 }}>{props.item.message}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItem = (props) => {
        const backgroundColor = "#fff"
        return (
            <Item
                item={props.item}
                onPress={() => navigation.navigate('chat')}
                style={{ backgroundColor }}
            />
        );
    };

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: "100%",
            }}
        >
            <Text>Swipe down to close</Text>
            <FlatList
                data={dataList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

    return (
        <View style={styles.chatListContainer}>
            <Text>
                ChatList Screen
            </Text>
            <Button title="next" type="clear" onPress={() => props.navigation.navigate("chat")} />
            <FAButton style={""} onPress={() => sheetRef.current.snapTo(0)} />
            {/* <View
                style={{
                    flex: 1,
                    backgroundColor: 'papayawhip',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    title="Open Bottom Sheet"
                    onPress={() => sheetRef.current.snapTo(0)}
                />
            </View> */}
            <BottomSheet
                ref={sheetRef}
                snapPoints={["80%", 450, 0]}
                borderRadius={10}
                renderContent={renderContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    chatListContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        backgroundColor: '#fff',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        paddingLeft: 10
    },
    chatAdvisorImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    }
});