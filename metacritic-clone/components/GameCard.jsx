import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className="bg-slate-500/10 p-4 rounded-xl gap-4 mb-10 flex-row "
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View className="pr-2">
        <Text style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text className="pr-32 text-white mt-4">
          {game.description.slice(0, 100)}...
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, [index, opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    color: "#eee",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
