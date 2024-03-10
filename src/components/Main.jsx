import { View } from "react-native";
import PanelButt from "./PanelButt";
import Ventana from "./Ventana";

function Main() {
  return (
      <View style={{ height: 800 }}>
        <Ventana />
        <PanelButt />
      </View>
  );
}

export default Main;
