import React, { useState } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { autenticacao } from '../config/firebaseConfig';

export default function TelaCadastro({
  navigation,
}) {
  const [nome, setNome] = useState('');

  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');

  const [erro, setErro] = useState('');

  const fazerCadastro = async () => {
  try {

    const resposta =
      await createUserWithEmailAndPassword(
        autenticacao,
        email,
        senha
      );

    await updateProfile(
      resposta.user,
      {
        displayName: nome,
      }
    );

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    await autenticacao.currentUser.reload();

    navigation.replace('Home');

  } catch (erro) {

    console.log(erro);

    setErro(
      'Erro ao cadastrar.'
    );
  }
};

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>
        Cadastro
      </Text>

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={estilos.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={estilos.button}
        onPress={fazerCadastro}
      >
        <Text style={estilos.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      {erro ? (
        <Text style={estilos.erro}>
          {erro}
        </Text>
      ) : null}
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
  },

  button: {
    width: '80%',
    height: 55,
    backgroundColor: '#3d7bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 12,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  erro: {
    color: '#d32f2f',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
});