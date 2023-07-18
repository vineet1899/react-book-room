import React, { useState } from 'react';
import RoomPopup from './RoomPopup';

const MainPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRoomSelect = (roomNo) => {
    setSelectedRoom(roomNo);
  };

  return (
    <div>
      <h1>Room Booking</h1>
      <button onClick={handleOpenPopup}>Book Room</button>

      {isPopupOpen && (
        <RoomPopup
          floor="GROUND"
          roomNos={[
            { roomNo: '01', isFilled: 0 },
            { roomNo: '10', isFilled: 0 },
            { roomNo: '15', isFilled: 0 },
            { roomNo: '21 (D)', isFilled: 0 },
            { roomNo: '22', isFilled: 0 },
            { roomNo: '23', isFilled: 0 },
          ]}
          onClose={handleClosePopup}
          onRoomSelect={handleRoomSelect}
        />
      )}

      {selectedRoom && <p>Selected Room: {selectedRoom}</p>}
    </div>
  );
};

export default MainPage;
