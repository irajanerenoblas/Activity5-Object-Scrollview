import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import guest from './src/Guests';
import React, {useState} from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const show = (guestss) =>{
    setModalVisible(true);
    setSelectedUser(guestss);
  };

  return (
    <View style={styles.container}>

    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {selectedUser &&(
                  <Text style={{fontSize: 28, fontWeight: '600',  fontFamily: 'Tahoma', padding: 15}}>Hello, {selectedUser.nick}!</Text>
                )}
                {selectedUser && (
                  <Text style={{fontSize: 28,  fontFamily: 'Tahoma', color: '#0802A3', fontWeight: '100'}}>{selectedUser.name.fname} {selectedUser.name.lname},
                  </Text>
                )}
                {selectedUser && (
                  <Text style={{fontWeight: '100',  fontFamily: 'Tahoma', color: '#F94C10', fontSize: 20}}>{selectedUser.course}</Text>
                )}

                <TouchableOpacity onPress={()=> setModalVisible(false)}>
                  <Text style={{marginTop: 25, fontSize: 20, color: '#776B5D'}}>Close</Text>
                </TouchableOpacity>
                       
            </View>
          </View>
        </Modal>

      <Text style={styles.txt}>SCROLLVIEW</Text>
      {guest.map ((guestss)=>{
        return(
          <View>
            <ScrollView>
              <TouchableOpacity onPress={()=> show(guestss)} style={styles.border}>
                <Text style={styles.txt1}>{guestss.nick}</Text>
              </TouchableOpacity>
                
            </ScrollView>

          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  txt: {
    fontWeight: '700',
    fontFamily: 'Tahoma',
    fontSize: 35,
    color: '#557C55',
    marginLeft: 10

  },
  txt1: {
    fontWeight: '500',
    fontFamily: 'Tahoma',
    fontSize: 25,
    marginLeft: 15,
    margin: 10
  },
  border: {
    borderWidth: 0.1,
    borderColor: '#B2533E'

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation: 5,
  },
});