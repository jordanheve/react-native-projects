import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-400 mt-20">
        Home
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, ligula nec malesuada ultricies, odio purus ultricies
        ligula, nec scelerisque sem quam eu libero. Sed nec libero eget elit
      </Text>
    </ScrollView>
  );
}
