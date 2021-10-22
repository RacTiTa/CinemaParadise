import "./MovieCardModal.css";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

const MovieCardModal = ({ img, open, title, description, closeModal }) => {
  return (
    <>
      <Modal isOpen={open} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="modal-title">{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Image
                className="movie-image"
                src={
                  img
                    ? `https://image.tmdb.org/t/p/w200${img}`
                    : `https://via.placeholder.com/200x300`
                }
              />
              <Text className="descrition-container">{description}</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MovieCardModal;
