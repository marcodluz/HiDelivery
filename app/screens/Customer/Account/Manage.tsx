import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { screenWithHeader } from "@/app/styles/Global";
import TextField from "@/app/components/ui/inputs/textField/TextField";
import { useAuth } from "@/app/context/AuthContext";
import { IUser } from "@/app/interfaces/IUser";
import Button from "@/app/components/ui/inputs/button/Button";

const Manage = () => {
  const { getUserData, updateUserData } = useAuth();
  const [userData, setUserData] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      setUserData(await getUserData());
    };

    fetchData();
    setIsLoading(false);
  }, []);

  const handleDetailsChange = async () => {
    Alert.alert(
      "Change Details",
      "Are you sure you want to change your details? You can only do this once a month.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Change",
          onPress: () => updateUserData(email, firstName, lastName),
        },
      ]
    );
  };

  return (
    <View className={`${screenWithHeader}`}>
      <View className="justify-between h-full">
        <View>
          <View className="mb-1">
            <Text className="font-bold text-lg">Personal Details</Text>
          </View>
          {isLoading ? (
            <Text>Loading user data...</Text>
          ) : (
            <>
              <View className="my-1">
                <TextField
                  value={email}
                  label="Email"
                  placeholder={userData?.email}
                  maxLength={254}
                  onChange={(text) => setEmail(text)}
                />
              </View>
              <View className="my-1">
                <TextField
                  value={firstName}
                  label="First Name"
                  placeholder={userData?.firstName}
                  maxLength={50}
                  onChange={(text) => setFirstName(text)}
                />
              </View>
              <View className="my-1">
                <TextField
                  value={lastName}
                  label="Last Name"
                  placeholder={userData?.lastName}
                  maxLength={50}
                  onChange={(text) => setLastName(text)}
                />
              </View>
            </>
          )}
        </View>
        <Button onClick={handleDetailsChange}>Update Details</Button>
      </View>
    </View>
  );
};

export default Manage;
