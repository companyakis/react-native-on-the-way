import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

export default function App() {


  return (
    <View style={styles.container}>

      <View style={{marginBottom:10, paddingTop:8, paddingLeft: 15, width:100, height:90, backgroundColor:"purple", borderRadius:5}}>
        <Text style={{color:"white", fontSize:14}} >Mustafa 1</Text>
      </View>
      <View style={{margin:20, width:120, height:75, backgroundColor:"green", borderRadius:5}}>
        <Text style={{padding: 20, color:"white", fontSize:16}}>Mustafa 2</Text>
      </View>
      <View style={{marginTop: 30, width:150, height:150, backgroundColor:"blue", borderRadius:5}}>
        <Text style={{paddingTop: 25, paddingLeft: 20, color:"white", fontSize:20}}>Mustafa 3</Text>
      </View>
      
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
