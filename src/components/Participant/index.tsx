import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { Pencil, Trash2 } from "lucide-react-native";


type Props = {
    name?: string,
    onRemove?: () => void
    onEdit?: () => void
}

export function Participant({ name, onRemove, onEdit }: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.boxEdit} onPress={onEdit}>
                <Pencil color="white" size={20}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    <Trash2 color="white" size={20}/>
                </Text>
            </TouchableOpacity>
        </View>
    )
}