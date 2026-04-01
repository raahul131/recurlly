import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl text-center font-bold text-accent">
        Welcome to RecurLly!
      </Text>

      <Link href={"/onboarding"} className="text-white bg-primary rounded mt-4 px-4 py-2">Go to onboardig </Link>
      <Link href={"/sign-in"} className="text-white bg-primary rounded mt-4 px-4 py-2">Go to sign in </Link>
      <Link href={"/sign-up"} className="text-white bg-primary rounded mt-4 px-4 py-2">Go to sign up </Link>
    </View>
  );
}