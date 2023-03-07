import { Image, TouchableOpacity } from "react-native";

export default function VideoButton({parentToChild}) {
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={() => parentToChild.navigate("Video")}
  >
    <Image source={require("../assets/images/svg/Video.png")} />
  </TouchableOpacity>
  );
}