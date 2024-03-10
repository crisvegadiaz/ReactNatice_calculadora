import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AppContext } from "./AppProvider";

function ButtonCal({ children, stylePro1, stylePro2 }) {
  const { opera, setOpera } = useContext(AppContext);
  const combinedStyles1 = [style.button, stylePro1];
  const combinedStyles2 = [style.textButton, stylePro2];

  const operation = (valor) => {
    if (valor === "⌫") {
      if (opera === "ERROR") {
        setOpera("");
        return;
      } else {
        setOpera(opera.slice(0, -1));
      }
    } else if (valor === "⟲") {
      setOpera("");
    } else if (opera === "ERROR") {
      setOpera(valor);
      return;
    } else if (valor === "=") {
      let newString = opera
        .replace(/×/g, "*")
        .replace(/−/g, "-")
        .replace(/\+/g, "+")
        .replace(/÷/g, "/");

      try {
        setOpera(eval(newString).toString());
      } catch (error) {
        setOpera("ERROR");
      }
    } else {
      setOpera(opera + valor);
    }
  };

  return (
    <TouchableOpacity
      style={combinedStyles1}
      onPress={() => operation(children)}
    >
      <Text style={combinedStyles2}>{children}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#b380dd",
    borderRadius: 50,
    paddingVertical: 25,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  textButton: {
    width: 32,
    height: 32,
    lineHeight: 36,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default ButtonCal;
