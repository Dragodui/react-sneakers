import React from 'react';

const AddModal = ({
    isInList,
    listName,
    isVisible
}) => {
    return (
        <div className={`modal ${isVisible ? "modal__visible" : "modal__hidden"}`}>
            {
                isInList
                ?   `Added to ${listName}`
                :   `Removed from ${listName}`
            }
        </div>
    );
};

export default AddModal;