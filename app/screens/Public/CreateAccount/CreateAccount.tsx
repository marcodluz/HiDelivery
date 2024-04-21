import * as React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "@/app/context/AuthContext";
import useNavigationController from "@/app/services/useNavigationController";

const CreateAccount = () => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { createAccount, userEmailExists, user } = useAuth();

  useNavigationController(user, "Get Started", true);

  // const handleCreateAccount = async () => {
  //   await createAccount(email, password);
  // };

  const handleVerify = async () => {
    setErrorMessage(""); // Clear previous error message before checking
    if (userEmailExists(email)) {
      console.log("EMAIL EXISTS");
      setErrorMessage("This email is already registered!");
    } else {
      console.log("EMAIL DOES NOT EXIST");
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1 items-center bg-white px-9">
      <Text className="text-3xl font-bold text-center mt-10 mb-5">
        What's your email?
      </Text>
      <View className="w-full mb-5">
        <TextInput
          className={`border border-slate-200 px-4 py-5 rounded-xl ${
            errorMessage && "border-red-500"
          }`}
          placeholder="Email Address"
          keyboardType="email-address"
          inputMode="email"
          textContentType="emailAddress"
          autoComplete="email"
          clearButtonMode="while-editing"
          returnKeyType="next"
          autoCapitalize="none"
          maxLength={254}
          value={email}
          onChangeText={setEmail}
          onChange={() => setErrorMessage("")}
        />
        {errorMessage && (
          <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
        )}
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
        />
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
        /> */}
        <TouchableOpacity
          // onPress={handleCreateAccount}
          onPress={handleVerify}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Verify</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
