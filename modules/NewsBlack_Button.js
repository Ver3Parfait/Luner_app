import { styles } from "../assets/css/style.js";
import { Image, TouchableOpacity } from "react-native";

export default function NewsBlackButton({ parentToChild }) {
  return (
    <TouchableOpacity style={styles.nav_active} activeOpacity={1}>
      <Image source={require("../assets/images/svg/News_Black.png")} />
    </TouchableOpacity>
  );
}
