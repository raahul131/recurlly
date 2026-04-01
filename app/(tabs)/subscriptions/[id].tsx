import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Subscription Details Page</Text>
      <Text>{id}</Text>
      <Link href={"/"} className="text-white bg-primary rounded mt-4 px-4 py-2">Go to home</Link>
    </View>
  )
}

export default SubscriptionDetails;