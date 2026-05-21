import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {

  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  const hexColor = useMemo(() => {
    const toHex = (value) => value.toString(16).padStart(2, '0');

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();
  }, [red, green, blue]);

  return (
    <View style={[estilos.container, { backgroundColor: rgbColor }]}>
      
      <View style={estilos.content}>

        <View style={estilos.infoCard}>
          <Text style={estilos.title}>Seletor de Cores</Text>

          <Text style={estilos.hexText}>
            {hexColor}
          </Text>

          <Text style={estilos.rgbText}>
            {rgbColor}
          </Text>
        </View>

        <View style={estilos.controls}>

          <View style={estilos.sliderContainer}>

            <View style={estilos.labelRow}>
              <Text style={estilos.label}>Vermelho</Text>
              <Text style={estilos.valueText}>{red}</Text>
            </View>

            <Slider
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={red}
              onValueChange={setRed}
              minimumTrackTintColor="red"
              maximumTrackTintColor="#ddd"
              thumbTintColor="red"
              style={estilos.slider}
            />
          </View>

          <View style={estilos.sliderContainer}>

            <View style={estilos.labelRow}>
              <Text style={estilos.label}>Verde</Text>
              <Text style={estilos.valueText}>{green}</Text>
            </View>

            <Slider
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={green}
              onValueChange={setGreen}
              minimumTrackTintColor="green"
              maximumTrackTintColor="#ddd"
              thumbTintColor="green"
              style={estilos.slider}
            />
          </View>

          {/* BLUE */}
          <View style={estilos.sliderContainer}>

            <View style={estilos.labelRow}>
              <Text style={estilos.label}>Azul</Text>
              <Text style={estilos.valueText}>{blue}</Text>
            </View>

            <Slider
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={blue}
              onValueChange={setBlue}
              minimumTrackTintColor="blue"
              maximumTrackTintColor="#ddd"
              thumbTintColor="blue"
              style={estilos.slider}
            />
          </View>

        </View>

      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },

  infoCard: {
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },

  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '600',
    opacity: 0.8,
  },

  hexText: {
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#fff',
  },

  rgbText: {
    fontSize: 16,
    color: '#fff',
  },

  controls: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 15,
    borderRadius: 20,
  },

  sliderContainer: {
    marginBottom: 20,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },

  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  slider: {
    width: '100%',
    height: 40,
  },
});