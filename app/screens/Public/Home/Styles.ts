import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  imageContainer: {
    flex: 1.5,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#e7ffe7",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },

  bottomContainer: {
    flex: 1,
    padding: 20,
  },

  welcomeText: {
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 20,
  },

  descriptionText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 50,
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
