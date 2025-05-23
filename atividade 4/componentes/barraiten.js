// BarraItem.js
import { View, Text, Image, StyleSheet } from 'react-native';

export default function BarraItem({ texto, iconLeft, iconRight, bgLeft = '#d07e0e', bgRight = '#bc1108' }) {
  return (
    <View style={styles.linha}>
      <View style={[styles.icon, { backgroundColor: bgLeft }]}>
        <Image source={iconLeft} style={styles.trashIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.texto}>{texto}</Text>
      </View>
      <View style={[styles.icon, { backgroundColor: bgRight }]}>
        <Image source={iconRight} style={styles.trashIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    backgroundColor: '#3c77b2',
    flexDirection: 'row',
    width: '90%',
    height:70,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  icon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  texto: {
    color: '#fff',
  },
});
