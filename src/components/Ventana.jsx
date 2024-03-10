import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppContext } from "./AppProvider";

function Ventana() {
  const { opera } = useContext(AppContext);
  return (
    <View style={style.vista}>
      <Text style={style.text}>{opera}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  vista: {
    height: 240,
    padding: 10,
    marginVertical: 30,
    borderColor: "#b380dd",
    borderBottomWidth:4,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Ventana;
