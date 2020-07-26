import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
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
            title="Stop Recording"
            titleStyle={{ color: "white" }}
            onPress={stopRecording}
          />
        ) : (
          <ListItem
            style={{
              backgroundColor: "#5059B9",
            }}
            Component={TouchableScale}
            friction={80} //
            tension={90} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
              colors: ["#5059B9", "#0031E5"],
              start: [1, 1],
              end: [0.5, 0.5],
            }}
            title="Start Recording"
            titleStyle={{ color: "white" }}
            onPress={startRecording}
          />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
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
            title="Save Recording"
            titleStyle={{ color: "white" }}
            onPress={saveTrack}
          />
        ) : null}
      </Spacer>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 3,
    height: 100,
  },
});

export default TrackForm;
