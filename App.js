import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{ marginBottom: 80 }}>
        <header style={{ fontSize: 30, fontWeight: 'bold' }}>Tic Tac Toe</header>
      </View>

      <View style={{marginBottom: 60}}>
        <View style={styles.row}>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>X</Text>
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>O</Text>
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>X</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>O</Text>
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>X</Text>
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>O</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>X</Text>
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>O</Text>
          </Pressable>
          <Pressable style={styles.buttons} onPress={""}>
            <Text style={{ fontSize: 30, color: 'white' }}>X</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.player}>
        <Text style={{ fontSize: 30, marginRight: 30 }}>Player1: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>X</Text></Text>
        <Text style={{ fontSize: 30, marginLeft: 30 }}>Player2: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>O</Text></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  buttons: {
    height: 60,
    width: 60,
    margin: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    flexDirection: 'row',
  }
});
