import React, { useState } from "react";
import axios from "axios";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Text,
} from "react-native";
import Constants from "expo-constants";

const AddressSearchBar = () => {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState([]);

  const apiKey = Constants.expoConfig?.extra?.googleApiKey;

  const fetchPlaces = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}&language=en`
      );
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectAddress = (placeId: any) => {
    // You can fetch details here using the placeId if necessary
    console.log("Selected place ID:", placeId);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for your address"
        onChangeText={(text) => {
          setQuery(text);
          fetchPlaces();
        }}
        value={query}
      />
      <FlatList
        data={predictions}
        keyExtractor={(item: any) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectAddress(item.place_id)}>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Your container styles
  },
  input: {
    // Your input styles
  },
  itemText: {
    // Your item text styles
  },
});

export default AddressSearchBar;
