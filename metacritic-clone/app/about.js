import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/icons";
export default function About() {
  return (
    <ScrollView>
      <Link asChild href="/" className=" mt-20">
        <Pressable>
          {({ pressed }) => (
            <Text className={pressed ? "text-yellow-300" : "text-white"}>
              <HomeIcon />
            </Text>
          )}
        </Pressable>
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
