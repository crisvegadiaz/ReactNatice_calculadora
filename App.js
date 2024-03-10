import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";
import AppProvider from "./src/components/AppProvider.jsx";

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f312b",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});
