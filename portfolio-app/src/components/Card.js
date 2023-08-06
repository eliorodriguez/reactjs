import { Heading, HStack, Image, Text, VStack , Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box w='100%' bg='white' borderRadius='10px'>
       <VStack direction='row'  align='left'>
        <Image
          borderRadius='10px'
          boxSize='100%'
          objectFit='cover'
          src={imageSrc}
          alt='Dan Abramov'
          />
        <Box w='100%' p={4}>
          <Heading color='black' size='md'>{title}</Heading>
          <Text color='black' fontSize='sm'>{description}</Text>
          <Heading mt={4} color='black' size='xs'>
              <a href='#'> See More <FontAwesomeIcon icon={faArrowRight} size="1x"/></a>
          </Heading>
        </Box>
      </VStack>   
    </Box>
  );
};

export default Card;
