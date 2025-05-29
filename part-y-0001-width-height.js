import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

export default function App() {


  return (
    <View style={styles.container}>

      <View style={{width:80, height:90, backgroundColor:"purple", borderRadius:5}} />
      <View style={{width:120, height:75, backgroundColor:"green", borderRadius:5}} />
      <View style={{width:150, height:150, backgroundColor:"blue", borderRadius:5}} />
      
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
