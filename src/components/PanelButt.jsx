import { View } from "react-native";
import ButtonCal from "./ButtonCal";

function PanelButt() {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
      }}
    >
      <ButtonCal>1</ButtonCal>
      <ButtonCal>2</ButtonCal>
      <ButtonCal>3</ButtonCal>
      <ButtonCal stylePro1={{ backgroundColor: "#ff7e97" }}>⟲</ButtonCal>
      <ButtonCal>4</ButtonCal>
      <ButtonCal>5</ButtonCal>
      <ButtonCal>6</ButtonCal>
      <ButtonCal
        stylePro1={{ backgroundColor: "#ff7e97" }}
        stylePro2={{ fontSize: 28 }}
      >
        ⌫
      </ButtonCal>
      <ButtonCal>7</ButtonCal>
      <ButtonCal>8</ButtonCal>
      <ButtonCal>9</ButtonCal>
      <ButtonCal stylePro1={{ backgroundColor: "#ff9b6b" }}>+</ButtonCal>
      <ButtonCal>0</ButtonCal>
      <ButtonCal stylePro1={{ backgroundColor: "#ff9b6b" }}>÷</ButtonCal>
      <ButtonCal stylePro1={{ backgroundColor: "#ff9b6b" }}>×</ButtonCal>
      <ButtonCal stylePro1={{ backgroundColor: "#ff9b6b" }}>−</ButtonCal>
      <ButtonCal stylePro1={{ backgroundColor: "#aadd80", flexGrow: 2 }}>
        =
      </ButtonCal>
    </View>
  );
}

export default PanelButt;
