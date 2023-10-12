import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SegmentedButtons } from 'react-native-paper';
const Screen14 = () => {
    const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
   <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />
        <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'Tinaja',
            label: 'Maria',
          },
          {
            value: 'Eusalan',
            label: 'Daisy',
          },
          { value: 'Valiente', label: 'Melrose' },
        ]}
      />
        <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'BSCS',
          },
          {
            value: 'train',
            label: 'BSIT',
          },
          { value: 'drive', label: 'BSCRIM' },
        ]}
      />
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
      justifyContent: 'space-around',
      flexWrap: 'wrap'
  }
}
);
export default Screen14