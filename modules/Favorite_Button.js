import { Image, TouchableOpacity } from "react-native";
import { styles } from "../assets/css/style.js";

export default function FavoriteButton({ parentToChild }) {
  return (
    <TouchableOpacity
    style={styles.favoriteButton}
      activeOpacity={1}
    >
      <Image source={require("../assets/images/svg/Favorite.png")} />
    </TouchableOpacity>
  );
}
