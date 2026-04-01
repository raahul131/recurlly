import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up Page</Text>
      <Link href={"/(auth)/sign-in"} className="text-white bg-primary rounded mt-4 px-4 py-2">
        Sign in
      </Link>
    </View>
  )
}

export default SignUp;