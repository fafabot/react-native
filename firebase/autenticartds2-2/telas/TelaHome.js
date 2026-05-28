import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { signOut } from 'firebase/auth';

import { autenticacao } from '../config/firebaseConfig';

export default function TelaHome({
  navigation,
}) {

  const fazerLogout = () => {
    signOut(autenticacao);
  };

  const nomeUsuario =
    autenticacao.currentUser?.displayName
    || 'Usuário';

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>
        Bem-vindo, {nomeUsuario}!
      </Text>
      
      <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('Perfil')}>
        <Text style={estilos.buttonText}>
          Ir para Perfil
        </Text>
      </TouchableOpacity>

        <TouchableOpacity style={estilos.button} title="Sair" onPress={fazerLogout}>
          <Text style={estilos.buttonText}>
          Sair
        </Text>
        </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f1ff',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#0f2f70',
    textAlign: 'center',
    letterSpacing: 0.8,
  },
  input: {
    width: '80%',
    height: 55,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d9e4ff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  button: {
    width: '80%',
    height: 55,
    backgroundColor: '#3d7bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 12,
    shadowColor: '#3d7bff',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  erro: {
    color: '#d32f2f',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  linkButton: {
    width: '80%',
    height: 55,
    backgroundColor: '#2bbd7e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    shadowColor: '#2bbd7e',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
});