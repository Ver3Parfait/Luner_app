import { Image, TouchableOpacity } from "react-native";

export default function NewsButton({ parentToChild }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => parentToChild.navigate("Actualitées")}
    >
      <Image source={require("../assets/images/svg/News.png")} />
    </TouchableOpacity>
  );
}
