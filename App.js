import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

var Array = ["", "", "", "", "", "", "", "", ""]

export default function App() {

  const [getState, setState] = useState("X")
  const [getPlayer, setPlayer] = useState("P1")
  const [modalVisible, setModalVisible] = useState(false);

  var checkP1 = false
  var checkP2 = false
  const winCondition = () => {
    const condition = [[0, 4, 8], [1, 4, 7], [2, 4, 6], [0, 3, 6], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8]]
    for (let i = 0; i < condition.length; i++) {
      if (Array[condition[i][0]] == getState && Array[condition[i][1]] == getState && Array[condition[i][2]] == getState) {
        return true
      }
    }
    return false
  }

  const drawCondition = () => {
    for (let i = 0; i < Array.length; i++) {
      if (Array[i].length < 1) {
        return false
      } else {
        return true
      }
    }
  }

  const func = (num) => {
    if (getPlayer == "P1") {
      if (Array[num].length < 1) {
        Array[num] = getState
        // setState("O")
        // setPlayer("P2")
        if (winCondition()) {
          checkP1 = true
          setModalVisible(true)
        } else if (drawCondition) {
          setModalVisible(true)
          } else {
            setState("O")
            setPlayer("P2")
          }
        } else {
          alert("can't do this")
        }
      
    } else if (getPlayer == "P2") {
      if (Array[num].length < 1) {
        Array[num] = getState
        // setState("X")
        // setPlayer("P1")
        if (winCondition()) {
          checkP2 = true
          setModalVisible(true)
        } else if (drawCondition) {
          setModalVisible(true)
          } else {
            setState("X")
            setPlayer("P1")
          }
        } else {
          alert("can't do this")
        }
      
    }
  }
  const stats = () => {
    if (winCondition()) {
      if (checkP1 == true) {
        return "Player 1 wins"
      } else if (checkP2 == true) {
        return "Player 2 wins"
      }
      else {
        return "Match Drawn"
      }
    }
  }
    const playAgain = () => {
      Array = ["", "", "", "", "", "", "", "", ""]
      setState("X")
      setPlayer("P1")
      setModalVisible(false)
    }

    return (
      <View style={styles.container}>

        <View style={{ marginBottom: 80 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Tic Tac Toe</Text>
        </View>

        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          {getPlayer}'s Turn
      </Text>
        <View style={{ marginBottom: 60 }}>
          <View style={styles.row}>
            <Pressable style={styles.buttons} onPress={() => { func(0) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[0]}</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => { func(1) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[1]}</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => { func(2) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[2]}</Text>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable style={styles.buttons} onPress={() => { func(3) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[3]}</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => { func(4) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[4]}</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => { func(5) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[5]}</Text>
            </Pressable>
          </View>

          <View style={styles.row}>
            <Pressable style={styles.buttons} onPress={() => { func(6) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[6]}</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => { func(7) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[7]}</Text>
            </Pressable>
            <Pressable style={styles.buttons} onPress={() => { func(8) }}>
              <Text style={{ fontSize: 30, color: 'white' }}>{Array[8]}</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.player}>
          <Text style={{ fontSize: 30, marginRight: 30 }}>Player1: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>X</Text></Text>
          <Text style={{ fontSize: 30, marginLeft: 30 }}>Player2: <Text style={{ fontSize: 30, fontWeight: 'bold' }}>O</Text></Text>
        </View>


        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View >
              <View >
                <Text style={{ fontSize: 30, color: 'white' }}>{stats()}</Text>
                <Pressable style={styles.buttons} onPress={playAgain}>
                  <Text style={{ fontSize: 30, color: 'white' }}>Play Again</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
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
      height: 70,
      width: 70,
      margin: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    player: {
      flexDirection: 'row',
    }
  });
