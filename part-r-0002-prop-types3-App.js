import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import SalesData from "./components/SalesData"

export default function App() {


  return (
    <View style={styles.container}>

      <SalesData employee={"Ayhan Bilir"} amount={62500} />

      <SalesData employee={"Bengu Kagan"} amount={38700} />

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
