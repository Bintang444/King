import React from "react";
import { Text, View, Image } from "react-native";

const App = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Text>XI RPL 2</Text>
      <Poto/>
    </View>
  )
}

const Poto = () => {
  return <Image source={{ uri: 'https://picsum.photos/id/1015/600/400' }} style={{ width: 150, height: 150 }}/>
}

export default App