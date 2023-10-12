import * as React from 'react';
import { Image , Text, StyleSheet , View} from 'react-native';
import { Banner } from 'react-native-paper';

export default function Screen4() {
    const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
    <Text>Banner</Text>
    <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  <Banner
    visible={visible}
    actions={[
      {
        label: 'Fix it',
        onPress: () => setVisible(false),
      },
      {
        label: 'Learn more',
        onPress: () => setVisible(false),
      },
    ]}
    icon={({size}) => (
      <Image
        source={{
          uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    )}>
    There was a problem processing a transaction on your credit card.
  </Banner>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
   padding: 5,
   gap: 10
    
    },
}
);