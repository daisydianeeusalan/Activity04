import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
export default function Screen2() {
  return (
    <View style={styles.container}>
    <Text>Icon</Text>
    <View style={styles.row}>
      <Avatar.Icon size={60} icon="heart" />
      <Avatar.Icon size={60} icon="heart" />
      <Avatar.Icon size={60} icon="heart" />
      </View>
      <Text>Image</Text>
    <View style={styles.row}>
    <Avatar.Image size={60} source={require('../assets/favicon.png')} />
    <Avatar.Image size={60} source={require('../assets/favicon.png')} />
    <Avatar.Image size={60} source={require('../assets/favicon.png')} />
      </View>
      <Text>Text</Text>
    <View style={styles.row}>
    <Avatar.Text size={60} label="Hi" />
    <Avatar.Text size={60} label="He" />
    <Avatar.Text size={60} label="Bye" />
      </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
   padding: 5,
   gap: 10
    
    },
    row:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-around'
    }
}
);