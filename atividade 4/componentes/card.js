import { View, Text, StyleSheet } from 'react-native';

export default function Card({texto1, texto2, cor_num, CLeft='#fff' }) {
  return (
    <View style={[styles.caixas1,{ backgroundColor: CLeft='#fff'}]}>
        <Text style={styles.textoletra}>{texto1}</Text>
        <Text style={[styles.textonumero,{color: cor_num }]}>{texto2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caixas1: {
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 10,
    borderRadius: 8,
    height:120,
    width:"auto",
    alignItems:'center',
    justifyContent:"center"
  },
  textoletra:{
    fontSize:20,
    padding:10
    
  },
  textonumero:{
    fontSize:40,
    
  }
});