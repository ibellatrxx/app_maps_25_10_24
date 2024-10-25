import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const addresses = [
    { latitude: -23.69270898415609, longitude: -46.550303260955765, title: "Ponto A" },
    { latitude: -23.66887435207675, longitude: -46.58465937629991, title: "Ponto B" },
    // Adicione mais endereços conforme necessário
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.637500205716286,
          longitude: -46.578693760958224,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {addresses.map((place, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
