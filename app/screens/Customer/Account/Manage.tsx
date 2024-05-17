import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { screenWithHeader } from "@/app/styles/Global";
import TextField from "@/app/components/ui/inputs/textField/TextField";
import { useAuth } from "@/app/context/AuthContext";
import { IUser } from "@/app/interfaces/IUser";
import Button from "@/app/components/ui/inputs/button/Button";

const Manage = () => {
  const { getUserData } = useAuth();
  const [userData, setUserData] = useState<IUser>();

  React.useEffect(() => {
    const fetchData = async () => {
      setUserData(await getUserData());
    };

    fetchData();
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
        { text: "Change", onPress: () => {} },
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
          <View className="my-1">
            <TextField value={userData?.email} label="Email" maxLength={255} />
          </View>
          <View className="my-1">
            <TextField
              value={userData?.firstName}
              label="First Name"
              maxLength={255}
            />
          </View>
          <View className="my-1">
            <TextField
              value={userData?.lastName}
              label="Last Name"
              maxLength={255}
            />
          </View>
        </View>
        <Button onClick={handleDetailsChange}>Change Details</Button>
      </View>
    </View>
  );
};

export default Manage;
