import {
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Link } from "expo-router";
import Logo from "./Logo";
import { CircleInfoIcon } from "./icons";
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((data) => {
      setGames(data);
    });
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginLeft: 20, marginBottom: 5 }}>
        <Logo />
      </View>
      <Link asChild href="/about">
        <Pressable>
          {({ pressed }) => (
            <Text className={pressed ? "text-yellow-300" : "text-white"}>
              <CircleInfoIcon />
            </Text>
          )}
        </Pressable>
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator
          size="large"
          color="#ccc"
          style={{ marginTop: 50 }}
        />
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
          keyExtractor={(game) => game.slug}
        />
      )}
    </View>
  );
}
