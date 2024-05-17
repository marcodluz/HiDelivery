import React, { useState } from "react";
import { Text, View } from "react-native";
import { screenWithHeader } from "@/app/styles/Global";
import TextField from "@/app/components/ui/inputs/textField/TextField";
import { useAuth } from "@/app/context/AuthContext";
import { IUser } from "@/app/interfaces/IUser";

const Manage = () => {
  const { getUserData } = useAuth();
  const [userData, setUserData] = useState<IUser>();

  React.useEffect(() => {
    const fetchData = async () => {
      setUserData(await getUserData());
    };

    fetchData();
  }, []);

  return (
    <View className={`${screenWithHeader}`}>
      <View className="justify-between">
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
    </View>
  );
};

export default Manage;
