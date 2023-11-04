import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';

import LogoImg from './images/image3.png';
export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Image source={LogoImg} style={styles.imgcontainer} />
        <Text style={styles.imgbottomstyle}>Free Delivery Offers</Text>
        <Text style={
          styles.discription
        }>
        Free delivery for new customers via credit card and other payment method
        </Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    alignSelf: 'center',
    marginTop: '20%',
    borderRadius: '396.5px',
  },
  imgbottomstyle: {
    textAlign: 'center',
    height: '102px',
    fontFamily: 'Kreon',
    marginTop: 10,
    fontSize: 34,
    
    fontWeight: 900,
    color: '#024220',
  },
  discription: {
    width: 400,
    color: "#024220",
    opacity: "60%",
    lineHeight: "29.5px",
    fontSize: 25,
    textAlign: "center"
  }
});
