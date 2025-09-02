import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>navegar para detalhes</Text>
    </View>
  );
}
