import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import Participant from '~/components/Participant';

export default function Home() {
  const participants = [
    'Vitor',
    'Vini',
    'Diego',
    'Biro',
    'Beatriz',
    'Natalia',
    'Higor',
    'Josiane',
    'Ailton',
    'Ivone',
    'Joao',
    'Pedro',
  ];

  function handleParticipantAdd() {
    if (participants.includes('Vitor')) {
      return Alert.alert(
        'Participante existente',
        'Já existe um participante na lista com esse nome'
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 23 de Novembro de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptytext}>Ninguém chegou no evento ainda</Text>
        )}
      />
    </View>
  );
}
