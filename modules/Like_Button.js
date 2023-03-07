import { Image, TouchableOpacity } from "react-native";
import { styles } from "../assets/css/style.js";

export default function LikeButton({ parentToChild }) {
  return (
    <TouchableOpacity
    style={styles.likeButton}
      activeOpacity={1}
    >
      <Image source={require("../assets/images/svg/Like.png")} />
    </TouchableOpacity>
  );
}
