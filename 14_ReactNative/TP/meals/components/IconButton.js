import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


function IconButton({ icon, color, onClick }) {
    return (
        <Pressable onPress={onClick}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    )
}

export default IconButton