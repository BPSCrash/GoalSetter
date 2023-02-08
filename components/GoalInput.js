import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Text,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [errorIsVisible, setErrorVisibility] = useState(false);

  function goalInputHandler(enteredText) {
    setErrorVisibility(false)
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText == "") {
      setErrorVisibility(true);
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
      setErrorVisibility(false);
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="What is your goal?"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.errorContainer}>
          {errorIsVisible == true && 
          <><Image style={styles.errorImage} source={require("../assets/images/information-icon-3.png")} /><Text style={styles.errorMessage}> {"Please enter a goal"}</Text></>}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
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
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
    borderRadius: 8,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  errorContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 4,
  },

  errorMessage: {
    color: "red",
    fontSize: 14,
  },
  
  errorImage: {
    width: 14,
    height: 14,
    tintColor: "red"
  }
});
