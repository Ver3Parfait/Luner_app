import { Image, TouchableOpacity } from "react-native";

export default function AccountButton({ parentToChild }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => parentToChild.navigate("Compte")}
    >
      <Image source={require("../assets/images/svg/Profil.png")} />
    </TouchableOpacity>
  );
}
