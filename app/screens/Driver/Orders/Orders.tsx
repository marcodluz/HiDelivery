import React, { useState } from "react";
import { View, FlatList } from "react-native";
import RenderOrder from "@/app/components/order/Order";
import { useOrders } from "@/app/services/useOrders";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@/app/context/AuthContext";
import { screenWithHeader } from "@/app/styles/Global";

const Orders = () => {
  const [startTime, setStartTime] = useState(1709745048421);
  const [endTime, setEndTime] = useState(1709756842810);
  const ordersList = useOrders(startTime, endTime);

  const navigation = useNavigation();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View className={`${screenWithHeader}`}>
      {user && (
        <View>
          <FlatList
            data={ordersList}
            renderItem={({ item }) => <RenderOrder order={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default Orders;
