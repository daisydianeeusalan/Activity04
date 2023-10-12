import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper';
export default function Screen3() {
  return (
    <View style={styles.container}>
    <Text>With text</Text>
    <View style={styles.row}>
    <Badge>300</Badge>
      </View>
      <Text>Without text</Text>
    <View style={styles.row}>
    <Badge></Badge>
      </View>
      <Text>Dot</Text>
    <View style={styles.row}>
    <Badge></Badge>
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