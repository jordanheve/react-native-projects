import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 50) {
      return "bg-red-500";
    } else if (percentage < 70) {
      return "bg-yellow-600";
    } else {
      return "bg-green-500";
    }
  };
  const colors = getColors();
  return (
    <View
      className={"w-9 h-9 rounded-full justify-center items-center " + colors}
    >
      <Text className="text-xl text-white font-bold">{score}</Text>
    </View>
  );
}
