import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    NewPlace: NewPlaceScreen,

    PlaceDetail: PlaceDetailScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
    },
  }
);

export default createAppContainer(PlacesNavigator);
