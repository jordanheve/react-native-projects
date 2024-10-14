import { View } from "react-native";
import { Slot } from "expo-router";

export default function _layout() {
  return (
    <View className="flex-1 justify-center bg-black">
      <Slot />
    </View>
  );
}
