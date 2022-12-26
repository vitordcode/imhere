import { Text, View, TextInput, TouchableOpacity } from "react-native";

import Participant from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Voce clicou no botao de adicionar!");
  }

  function handleParticipantRemove() {
    console.log("Clicou em remover o participante: ")
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Vitor de Paula" onRemove={handleParticipantRemove}/>
    </View>
  );
}
