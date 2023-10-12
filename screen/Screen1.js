import { View, Text } from 'react-native'
import React from 'react'
import { Button, TouchableOpacity , StyleSheet} from 'react-native'
import { ScrollView } from 'react-native';
import { Searchbar,  FAB, Portal, PaperProvider  } from 'react-native-paper';
export default function Screen1({ navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
  <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      <View style={styles.containers}>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Avatar')}
      >
      <View style={styles.st}></View>
        <Text style={styles.buttonText}>Avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Badge')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Badge</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containers}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Banner')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Banner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Button')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containers}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Card')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Chip')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Chip</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containers}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DataTable')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Data Table</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dialog')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Dialog</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containers}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Divider')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Divider</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HelperText')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>HelperText</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containers}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containers}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Segmented')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>Segmented Buttons</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TextInput')}
      >
       <View style={styles.st}></View>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>
      </View>
    
    
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
     flexGrow: 1,
   padding: 5,
   gap: 10,
  flexWrap: 'wrap',
  flexDirection: 'row'
    },
    containers: {
   flexDirection: 'row',
   gap: 10,
   paddingHorizontal: 5,
   marginRight: 20
     },
    button: {
      backgroundColor: '#ebddff',
      height: 100,
      borderRadius: 5,
      borderRadius: 5,
      elevation: 5,
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      justifyContent: 'center'
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '300',
      paddingLeft: 10,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    texts:{
        flex: 1,
        textAlign: 'center',
        fontSize: 30
    }
  });