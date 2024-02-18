import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals, 
      enteredGoalText
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
         style={styles.textInput} 
         placeholder='Jouw course doel!' 
         onChangeText={goalInputHandler}
        />
        <Button title='Voeg Toe' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goelsContainer} >
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem} >
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1, 
    borderColor: '#cccccc', 
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goelsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'blue'
  },
  goalText: {
    color: 'white'
  }
});
