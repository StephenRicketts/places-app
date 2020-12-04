import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import ENV from "../env";

const MapPreview = (props) => {
  const imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}=14&size=400x400&markers=color:blue%7Clabel:A%7C11211%7C11206%7C11222&key=${ENV.googleApiKey}`;
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.mapPreview}>
      {props.location ? (
        <Image
          style={{ ...styles.mapImage, ...props.style }}
          source={{ uri: imagePreviewUrl }}
        />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
