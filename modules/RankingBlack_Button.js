import { styles } from "../assets/css/style.js";
import { Image, TouchableOpacity } from "react-native";

export default function RankingBlackButton({parentToChild}) {
  return (
    <TouchableOpacity
    style={styles.nav_active}
    activeOpacity={1}
  >
    <Image source={require("../assets/images/svg/Ranking_Black.png")} />
  </TouchableOpacity>
  );
}