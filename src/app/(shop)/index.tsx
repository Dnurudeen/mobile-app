import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.homeArea}>
      <Text>Home</Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et maiores
        facilis doloremque culpa a. Quo itaque enim sunt exercitationem incidunt
        at? Delectus magni aliquid odio corrupti iure ex expedita fugit!
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeArea: {
    padding: 20,
  }
});
