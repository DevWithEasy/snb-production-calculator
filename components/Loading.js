import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogOverlay,
    Spinner
} from '@chakra-ui/react';
import React from 'react';

const Loading = ({isOpen, onOpen, onClose}) => {
    const cancelRef = React.useRef()
    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogBody className='flex flex-col justify-center items-center space-y-1'>
                            <Spinner/>
                            <p>Updating...</p>
                            <p>Please with we are working.</p>
                        </AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default Loading;