import { View, ActivityIndicator, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Link } from "expo-router";
import Logo from "./Logo";
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
      <Link href="/about" className="text-blue-400">
        Ir al about
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
