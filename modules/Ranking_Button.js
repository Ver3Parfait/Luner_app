import { Image, TouchableOpacity } from "react-native";

export default function RankingButton({parentToChild}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => parentToChild.navigate("Classement")}
    >
      <Image source={require("../assets/images/svg/Tropher.png")} />
    </TouchableOpacity>
  );
}