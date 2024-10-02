import { View, Text } from 'react-native'
import {PropsWithChildren} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name}:IconProps) => {
   switch (name) {
    case 'circle':
        return(
            <Icon name={'circle-thin'} size={38} color='#000000' />
        )
        break;
    case 'cross':
    return(
        <Icon name={'times'} size={38} color='#333333' />
    )
    break;
    default:
        return(
            <Icon name={'pencile'} size={38} color='#333333' />
        )
   }
     
}

export default Icons