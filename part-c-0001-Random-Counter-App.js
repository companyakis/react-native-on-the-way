import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0)

  const counterUp = () => setCounter(counter + Math.floor(Math.random() * 10))

  const counterDown = () => setCounter(counter - Math.floor(Math.random() * 10))

  return (
    <View style={styles.container}>
      <Button title="Counter Up" onPress={counterUp} />
      <Text>Random Counter Value: {counter}</Text>
      <Button title="Counter Down" onPress={counterDown} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
