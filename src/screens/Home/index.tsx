import React, { useState} from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'

import Participant from '../../components/Participant'

import { styles } from './styles'

export default function Home() {

  const [ participants, setParticipants ] = useState<string[]>([])
  const [ participantName, setParticipantName ] = useState('')


  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante ja existente',
        'Por favor, insira um nome que nao esteja cadastrado'
      )
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Deletado!'),
        },
        {
          text: 'Nao',
          style: 'cancel',
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 30 de Dezembro 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Niguem chegou no evento ainda? Adicione participantes a sua lista de
            presenca!
          </Text>
        )}
      />
    </View>
  )
}
