import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.textInput} 
                    placeholder='Jouw course doel!' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Annuleer' color='#B95436' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Voeg Toe' onPress={addGoalHandler} color={'#575743'}/>
                    </View>
                </View>
            </View>
        </Modal>
    );    
}

export default GoalInput;   

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#A5A56D'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#D3D3A4',
        backgroundColor: '#D3D3A4', 
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 10
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});