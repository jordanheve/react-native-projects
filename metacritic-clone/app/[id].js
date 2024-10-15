import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del Juego
        </Text>
        <Link href="/" className="text-blue-400">
          Volver Atrás
        </Link>
      </View>
    </View>
  );
}
