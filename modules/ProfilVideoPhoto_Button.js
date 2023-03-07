import { styles } from "../assets/css/style.js";
import { Image, TouchableOpacity } from "react-native";

export default function ProrilVideoPhoto({parentToChild}) {
  return (
    <TouchableOpacity
      style={styles.profilPhoto}
      activeOpacity={1}
      onPress={() => parentToChild.navigate("Actualitées")}
    >
      <Image source={require("../assets/images/svg/ProfilVideoPhoto.png")} />
    </TouchableOpacity>
  );
}