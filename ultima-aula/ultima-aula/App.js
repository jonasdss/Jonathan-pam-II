import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtpcqY5m_oke5GNh4bblcpY-N34qUDMlE",
  authDomain: "meuprimeirofirestore-eb45f.firebaseapp.com",
  projectId: "meuprimeirofirestore-eb45f",
  storageBucket: "meuprimeirofirestore-eb45f.appspot.com",
  messagingSenderId: "339376384676",
  appId: "1:339376384676:web:55a7e47bcad5360bee5431"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [Pessoas, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const PessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await PessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setPessoas(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={Pessoas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nomes} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
