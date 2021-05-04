import React from 'react';

const RestModal = ({ summary, closeDeal }) => {

    return (
        <div className="modal">
            <h2>Do zapłaty: {summary}</h2>
            <button>Zakończ</button>

        </div>
    );
}

export default RestModal;