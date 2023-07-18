import React, { useState } from "react";

const RoomPopup = ({ floor, roomNos, onClose, onRoomSelect }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (roomNo, isFilled) => {
    if (isFilled) return; // Do nothing if the room is not available

    setSelectedRoom(roomNo);
  };

  const handleOkClick = () => {
    onRoomSelect(selectedRoom);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Floor: {floor}</h2>
        <h3>Select a Room:</h3>
        <div className="room-list">
          {roomNos.map((room) => (
            <div
              key={room.roomNo}
              className={`room ${room.isFilled ? "unavailable" : "available"} ${
                selectedRoom === room.roomNo ? "selected" : ""
              }`}
              onClick={() => handleRoomClick(room.roomNo, room.isFilled)}
            >
              {room.roomNo}
            </div>
          ))}
        </div>
        <button onClick={handleOkClick} disabled={!selectedRoom}>
          OK
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default RoomPopup;
