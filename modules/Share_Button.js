import { styles } from "../assets/css/style.js";
import { Image, TouchableOpacity } from "react-native";

export default function ShareButton({parentToChild}) {
  return (
    <TouchableOpacity style={styles.shareButton} activeOpacity={1}>
      <Image source={require("../assets/images/svg/Share.png")} />
    </TouchableOpacity>
  );
}