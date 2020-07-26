import React, { useContext } from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        style={styles.list}
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <ListItem
              Component={TouchableScale}
              friction={80} //
              tension={90} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              linearGradientProps={{
                colors: ["#5059B9", "#0031E5"],
                start: [1, 0],
                end: [0.5, 0],
              }}
              chevron={(true, { color: "white" })}
              title={item.name}
              titleStyle={{ color: "white" }}
              style={styles.touchSection}
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            />
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
  headerTitleStyle: { color: "white" },
  headerBackground: () => (
    <Image
      style={{ width: "100%", height: "100%" }}
      source={require("../../../tracks/assets/topBarBg.png")}
    />
  ),
};

const styles = StyleSheet.create({
  touchSection: {
    borderColor: "black",
    padding: 4,
  },
  list: {
    paddingTop: 10,
  },
});

export default TrackListScreen;
