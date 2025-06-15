import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View style={styles.textArea}>
      <Text>Orders</Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error
        asperiores, commodi nulla in laboriosam provident libero a quidem
        corporis fugit fuga nemo delectus cupiditate. Fugit aliquid repudiandae
        modi impedit.
      </Text>
    </View>
  );
}

export default Orders

const styles = StyleSheet.create({
  textArea: {
    padding: 20,
  }
})