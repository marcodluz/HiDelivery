import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import Input from "@/app/components/ui/dataEditors/input/Input";
import { useNavigation } from "@react-navigation/native";

const VerifyEmail = () => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { createAccount, user, isEmailInUse, sendEmailVerificationCode } =
    useAuth();
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    createAccount(email, password, "Marco", "Luz");
  };

  const handleVerify = async () => {
    // Clear previous error message before checking
    setErrorMessage("");

    // Check if email is empty before proceeding
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    // Validate email format
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Email is not empty and has valid format, proceed with existence check
    const isEmailUsed = await isEmailInUse(email);
    if (isEmailUsed) {
      setErrorMessage("This email is already registered!");
    } else {
      // await sendEmailVerificationCode(email);
      navigation.navigate("VerifyEmailCode");
    }
  };

  // Function to validate email format (replace with your implementation)
  function validateEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <View className="flex-1 items-center bg-white px-9">
      <Text className="text-3xl font-bold text-center mt-10 mb-5">
        What's your email?
      </Text>
      <View className="w-full mb-5">
        <Input
          value={email}
          maxLength={254}
          placeholder="Email Address"
          keyboardType="email-address"
          inputMode="email"
          textContentType="emailAddress"
          autoComplete="email"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          errorMessage={errorMessage}
          onChange={(value) => {
            setEmail(value);
            setErrorMessage(""); // Clear error on change
          }}
        />
        {/*<TextInput
          className="border border-slate-200 px-4 py-5 mt-3 rounded-xl"
          placeholder="First Name"
          keyboardType="default"
          inputMode="text"
          textContentType="givenName"
          autoComplete="given-name"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="words"
          maxLength={50}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          className="border border-slate-200 px-4 py-5 mt-3 rounded-xl"
          placeholder="Last Name"
          keyboardType="default"
          inputMode="text"
          textContentType="familyName"
          autoComplete="family-name"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="words"
          maxLength={50}
          value={lastName}
          onChangeText={setLastName}
        />
         <TextInput
          className="border border-slate-200 px-4 py-5 mt-3 rounded-xl"
          placeholder="Mobile number"
          keyboardType="phone-pad"
          inputMode="tel"
          textContentType="telephoneNumber"
          autoComplete="tel"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          maxLength={15}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />*/}
        <TextInput
          className="border border-slate-200 px-4 py-5 mt-3 rounded-xl"
          placeholder="Password"
          keyboardType="default"
          inputMode="text"
          textContentType="newPassword"
          autoComplete="new-password"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handleCreateAccount}
          //onPress={handleVerify}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmail;
