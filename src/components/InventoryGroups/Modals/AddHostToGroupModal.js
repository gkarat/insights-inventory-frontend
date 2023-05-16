import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { addHostToGroup } from '../utils/api';
import apiWithToast from '../utils/apiWithToast';
import { useDispatch  } from 'react-redux';
import { CreateGroupButton } from '../SmallComponents/CreateGroupButton';
import { addHostSchema } from './ModalSchemas/schemes';
import CreateGroupModal from './CreateGroupModal';

const AddHostToGroupModal = ({
    isModalOpen,
    setIsModalOpen,
    modalState,
    reloadData
}) => {
    const dispatch = useDispatch();
    const { display_name: displayName, id } = modalState;

    const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
    const handleAddDevices = (values) => {
        const { group } = values;
        const statusMessages = {
            onSuccess: {
                title: 'Success',
                description: `System(s) have been added to ${group.name} successfully`
            },
            onError: { title: 'Error', description: `Failed to add ${displayName} to ${group.name}` }
        };

        apiWithToast(
            dispatch,
            () => addHostToGroup(group.id, id),
            statusMessages
        );
    };

    return (
        <>
            <Modal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                title="Add to group"
                submitLabel="Add"
                schema={addHostSchema(displayName)}
                additionalMappers={{
                    'create-group-btn': {
                        component: CreateGroupButton,
                        closeModal: () => {
                            setIsCreateGroupModalOpen(true);
                            setIsModalOpen(false);
                        }
                    }
                }}
                onSubmit={handleAddDevices}
                reloadData={reloadData}
            />
            {isCreateGroupModalOpen && (
                <CreateGroupModal
                    isModalOpen={isCreateGroupModalOpen}
                    setIsModalOpen={setIsCreateGroupModalOpen}
                    //modal before prop tells create group modal that it should
                    //reopen add host modal when user closes create group modal
                    modalBefore={true}
                    setterOfModalBefore={setIsModalOpen}
                />
            )}
        </>
    );
};

AddHostToGroupModal.propTypes = {
    modalState: PropTypes.shape({
        id: PropTypes.string,
        // eslint-disable-next-line camelcase
        display_name: PropTypes.string
    }),
    isModalOpen: PropTypes.bool,
    setIsModalOpen: PropTypes.func,
    reloadData: PropTypes.func
};

export default AddHostToGroupModal;
