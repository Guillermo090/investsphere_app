import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton} from '@coreui/react';
import { useContext } from 'react';
import {ModalContext} from "../../providers/BaseAppProvider";

 
const ModalNewCripto = () => {

    const { isVisible, hideModal, modalName, updateModalName } = useContext(ModalContext);
 
    const disableNewCryptoModal = () => {
        
        hideModal();
        updateModalName('');
    }

    return (
        <>
        {/* {isVisible && ( */}
            <CModal
                visible={isVisible && modalName === "newCripto"}
                onClose={disableNewCryptoModal}
                aria-labelledby="LiveDemoExampleLabel"
                >
                <CModalHeader>
                    <CModalTitle id="LiveDemoExampleLabel"> Ingrese Nueva Compra</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Woohoo, you're reading this text in a modal!</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={disableNewCryptoModal}>
                    Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        {/* )} */}
        </>
    )
}


export default ModalNewCripto;