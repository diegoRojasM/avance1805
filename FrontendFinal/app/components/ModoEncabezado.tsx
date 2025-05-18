import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ModoEncabezadoProps {
  icono: any;
  titulo: string;
}

const ModoEncabezado: React.FC<ModoEncabezadoProps> = ({ icono, titulo }) => {
  return (
    <View style={styles.banner}>
      <Image source={icono} style={styles.icono} />
      <View style={styles.textos}>
        <Text style={styles.modo}>Modo</Text>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: 343,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  icono: {
    width: 55,
    height: 55,
    marginLeft: 11,
    marginTop: 4,
    resizeMode: 'contain',
  },
  textos: {
    marginLeft: 4,
    marginTop: 4,
  },
  modo: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 11,
    letterSpacing: -0.02 * 11,
    color: '#000000',
    marginLeft: 0,
  },
  titulo: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: 25,
    letterSpacing: -0.02 * 18,
    color: '#367C28',
  },
});

export default ModoEncabezado;

