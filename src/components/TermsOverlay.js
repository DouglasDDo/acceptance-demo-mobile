// TODO: create component to render Terms
// touchable to exit, image for logo?
// anticipating issues with scrolling... Answer: use ScrollView
import React, { useEffect } from 'react'
import { StyleSheet, Overlay, ScrollView } from 'react-native'
import { getLatestPublishedContractById } from '../utils/PactSafeAPIUtils';

// const OverlayExample = () => {
//     const [visible, setVisible] = useState(false);
  
//     const toggleOverlay = () => {
//       setVisible(!visible);
//     };
  
//     return (
//       <View>
//         <Button title="Open Overlay" onPress={toggleOverlay} />
  
//         <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
//           <Text>Hello from Overlay!</Text>
//         </Overlay>
//       </View>
//     );
//   };

// I forget if props need curly brackets for this...
// Idea: pass in component for terms hyperlink
export default function TermsOverlay(contract_id){ 
  const [visible, setVisible] = useState(false);
  const [psContract, setPsContract] = useState({ value: '', error: ''});


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect( () => {
    getLatestPublishedContractById(contract_id, setPsContract);
  }, []);

  //TODO: figure out how to make the hyperlink to terms toggle Overlay
  // Pass in comp as props?
  return (
    <View> 
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
};