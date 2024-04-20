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
  const { createAccount, user } = useAuth();

  useNavigationController(user, "Login");

  const handleCreateAccount = async () => {
    await createAccount(email, password);
  };

  return (
    <KeyboardAvoidingView className="flex-1 items-center bg-white px-9">
      <View className="w-full mt-14 mb-5">
        {/* <TextInput
          className="border border-slate-200 px-4 py-5 rounded-xl"
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
        /> */}
        <TextInput
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
        />
        <TouchableOpacity
          onPress={handleCreateAccount}
          className="h-14 mt-5 bg-sky-950 rounded-xl items-center w-full overflow-hidden justify-center"
        >
          <Text className="text-white font-normal text-lg">Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
