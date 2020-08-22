import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import { GoalListItem } from '../../common/GoalListItem';
import { InputText } from '../../common/InputText';
import { CommonButton } from '../../common/CommonButton';

export const Goals = () => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const [goals, setGoals] = useState([]);

    const goalInputHandler = (value) => {
        setEnteredGoal(value);
    };

    const addGoalHandler = () => {
        setGoals(currentGoals => [...currentGoals, {
            id: Math.random(), value: enteredGoal
        }]);
    };

    const onDeleteHandler = (goalId) => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        });
    }

    return (
        <View>
            <View style={styles.goalContainer}>
                {/*here using the custome compoent*/}
                <InputText
                    inputChangeHandler={goalInputHandler}
                    value={enteredGoal}
                />
                <CommonButton
                    title="Add"
                    onButtonHandler={addGoalHandler}
                />


                {/*this one using react native TextInput component 
                <TextInput
                    style={styles.textInput}
                    placeholder="Add New Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                /> */}
                {/* <Button title="ADD" onPress={addGoalHandler} /> */}
            </View>

            {/*looping throgh without FlatList
            <View>
                {goals.map((goal, index) => (
                    <ScrollView>
                        <View key={index} style={styles.goalList}>
                            <Text> {goal} </Text>
                        </View>
                    </ScrollView>
                ))}
            </View> */}

            {/*A better way to loop throuh using flatList */}
            <FlatList
                keyExtractor={(item) => item.id}
                data={goals}
                renderItem={itemData => <GoalListItem
                    id={itemData.item.id}
                    title={itemData.item.value}
                    onDelete={onDeleteHandler}
                />}
            // renderItem={itemData => (
            //     <View style={styles.goalList}>
            //         <Text> {itemData.item.value} </Text>
            //     </View>
            // )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    goalContainer: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    textInput: {
        borderColor: "#009387",
        borderWidth: 1,
        width: 280,
        padding: 8
    },
    //it's moved to the seperate component
    // goalList: {
    //     padding: 10,
    //     backgroundColor: "#ccc",
    //     borderColor: "#009387",
    //     borderWidth: 1,
    //     marginLeft: 20,
    //     marginRight: 20,
    //     marginTop: 10
    // }
})