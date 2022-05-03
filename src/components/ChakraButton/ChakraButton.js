import { Button } from '@chakra-ui/react'

function ChakraButton({onActions,colorScheme,children,size}){

 return <Button colorScheme={colorScheme} size={size} {...onActions}>{children}</Button>
}

export default ChakraButton