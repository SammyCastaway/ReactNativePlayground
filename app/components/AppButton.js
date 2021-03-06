import React from "react";
import { StyleSheet, StatusBar, Text, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 30,
    marginBottom: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  logotextview: {
    alignItems: "center",
    top: 40,
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  loginview: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default AppButton;
