import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {  
  const [modelIsVisible, setModeIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModeIsVisible(true);
  }

  function endAddGoalHandler() {
    setModeIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals, 
      { text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />  
      <View style={styles.container}>
        <Button title='Voeg Een Nieuw Doel Toe' color="#4E4E3E" onPress={startAddGoalHandler}/>
        <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goelsContainer} >
          <FlatList 
            data={goals} 
            renderItem={itemData => {
              return <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />; 
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goelsContainer: {
    flex: 5
  },
});
