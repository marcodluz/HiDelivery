import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Keyboard,
  FlatList,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { useAddress } from "@/app/context/AddressContext";

const AddressSearchBar = () => {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState<boolean>(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const { setAddress, setMarkerPosition } = useAddress();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation(location);
      setUseCurrentLocation(true);
    })();
  }, []);

  const apiKey = Constants.expoConfig?.extra?.googleApiKey;

  const fetchPlaces = async () => {
    let apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}&language=en`;

    // If the useCurrentLocation flag is true and location data is available, include the location in the request
    if (useCurrentLocation && location) {
      const { latitude, longitude } = location.coords;
      apiUrl += `&location=${latitude},${longitude}&radius=100`; // radius is in meters
    }

    try {
      const response = await axios.get(apiUrl);
      setPredictions(response.data.predictions);
      setIsListVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectAddress = async (placeId: string) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      const { lat, lng } = response.data.result.geometry.location;
      // Update your map region and marker position here
      Keyboard.dismiss();
      setMarkerPosition({ latitude: lat, longitude: lng });
      setIsListVisible(false);
      setAddress(response.data.result.formatted_address);
      setQuery(response.data.result.formatted_address);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <TextInput
          className="text-base bg-white h-14 rounded-2xl border-gray-200 border-2 text-center"
          placeholder="Search for your address"
          onChangeText={(text) => {
            setQuery(text);
            fetchPlaces();
          }}
          value={query}
        />
        {isListVisible && (
          <FlatList
            className="mt-5 absolute -z-10 bg-white self-center w-full p-4 pt-10 rounded-2xl"
            data={predictions}
            keyExtractor={(item: any) => item.place_id}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="my-4"
                onPress={() => handleSelectAddress(item.place_id)}
              >
                <Text className="text-base">{item.description}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        {errorMsg ? <Text>{errorMsg}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddressSearchBar;
