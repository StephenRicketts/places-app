import React from "react";
import { StyleSheet, Platform, FlatList, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import {} from "react-redux";

import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <View>
      <Text>Is this what is wrong</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceItem
            image={null}
            title={itemData.item.title}
            address={null}
            onSelect={() => {
              props.navigation.navigate("PlaceDetail", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
          />
        )}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;