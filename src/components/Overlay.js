// TODO: create component to render Terms
// touchable to exit, image for logo?
import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Overlay } from 'react-native'

const OverlayExample = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
    return (
      <View>
        <Button title="Open Overlay" onPress={toggleOverlay} />
  
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    );
  };