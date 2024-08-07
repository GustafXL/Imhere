//? Interface de elementos que compoem a aplicação

import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant"
import { useState } from "react"
import { Check } from "lucide-react-native"

type ParticipantsProps = string[]

export default function Home() {
  const [participants, setParticipants] = useState<ParticipantsProps>([])
  const [participantName, setParticipantName] = useState("")
  const [edit, setEdit] = useState(false)
  const [nameEdit, setNameEdit] = useState("")

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome.")
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName("")
  }

  function handleParticipantUpdate(index: number) {
    const update: ParticipantsProps = [...participants]

    update[index] = nameEdit
    setParticipants(update)
  } 

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover", `Deseja remover participante ${name}`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title_color}>Nome do Evento</Text>
      <Text style={styles.text_color}>
        Sexta, 1 de março 2024.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName} //? Forma resumida de pegar a informação do input e passar para a variável
          // onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
              +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants} 
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <View>
            <Participant name={item} onRemove={() => handleParticipantRemove(item)} onEdit={() => setEdit(!edit)} key={item}/>
            {edit && participants[index].includes(item) ? 
              (
                <View style={styles.formUpdate}>
                  <TextInput style={styles.input} placeholder="Atualizar participante"
                  placeholderTextColor="#6B6B6B" onChangeText={setNameEdit}/>
                  <TouchableOpacity style={styles.button} onPress={() => handleParticipantUpdate(index)}>
                    <Text style={styles.buttonText}>
                      <Check color="white" size={20}/>
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : ''
            }
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}