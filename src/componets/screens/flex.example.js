import React from 'react';
import { Text, View } from 'react-native';

export const FlexExample = () => {
    return (
        <View style={{
            padding: 50,
            flexDirection: "row",
            height: "60%",  //height has an impact on child element of the outer view
            width: 300,    // but width have no impact on child element of the outer view without justifyContent and alignItems
            justifyContent: "space-between",    //organise the child element along the main axis of the flex Direction
            alignItems: "stretch" // oganise the child element along the cross axis
            // the default value of the alignItem is 'streched' so it will take all the available height 
        }}>
            <View style={{
                backgroundColor: "red",
                // width: 100,
                // height: 100,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>1</Text>
            </View>
            <View style={{
                backgroundColor: "blue",
                // width: 100,
                // height: 100,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <Text>2</Text>
            </View>
            <View style={{
                backgroundColor: "green",
                // width: 100,
                // height: 100,
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>3</Text>
            </View>
        </View>
    )
}