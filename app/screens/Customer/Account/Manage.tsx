import React, { useState } from "react";
import { Text, View } from "react-native";
import { screenWithHeader } from "@/app/styles/Global";
import Input from "@/app/components/ui/dataEditors/input/Input";
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
      <View className="">
        <Text className="text-4xl font-semibold">Manage Account</Text>
        <Text className="mt-5">
          This is where you can manage your account details. This page is under
          development.
        </Text>
      </View>
      <View className="justify-between flex-1 mt-5">
        <View>
          <Input value={userData?.email} maxLength={255} />
          <Input value={userData?.firstName} maxLength={255} />
          <Input value={userData?.lastName} maxLength={255} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Manage;
