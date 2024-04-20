import { User } from "@firebase/auth";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const useNavigationController = (
  user: User | undefined,
  backPage: string,
  suppressText?: boolean
) => {
  const navigation = useNavigation();

  React.useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    } else {
      if (!user && navigation.canGoBack()) {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(backPage);
              }}
              className="flex-row items-center"
            >
              <FontAwesome6 name="chevron-left" size={22} color="black" />
              {suppressText && <Text className="ml-2">{backPage}</Text>}
            </TouchableOpacity>
          ),
        });
      }
    }
  }, []);
};

export default useNavigationController;
