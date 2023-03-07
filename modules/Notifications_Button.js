import { Image, TouchableOpacity } from "react-native";

export default function NotificationsButton({ parentToChild }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => parentToChild.navigate("Notifications")}
    >
      <Image source={require("../assets/images/svg/Bell.png")} />
    </TouchableOpacity>
  );
}
