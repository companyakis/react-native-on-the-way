import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Proverb from "./components/Proverb";

export default function App() {


  return (
    <View style={styles.container}>

      <Proverb prv={"A barking dog never bites..."}/>
      <Proverb prv={"A rolling stone gathers no moss..."}/>
      <Proverb prv={"Out of sight, out of mind..."}/>
      
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
