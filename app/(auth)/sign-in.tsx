import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In Page</Text>
      <Link href={"/(auth)/sign-up"} className="text-white bg-primary rounded mt-4 px-4 py-2">
        Create Account
      </Link>
    </View>
  )
}

export default SignIn;