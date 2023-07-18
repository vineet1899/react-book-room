import React, { useState, useEffect } from "react";
import RoomPopup from "../components/RoomPopup";
import styles from "../styles/styles.module.css";

const MainPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from an API endpoint or local file
    fetch("your-api-endpoint-or-file.json")
      .then((response) => response.json())
      .then((data) => setRoomData(data));
  }, []);

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
      <h1>Welcome to the Hotel</h1>
      <button onClick={handleOpenPopup}>Open Popup</button>

      {isPopupOpen && (
        <RoomPopup
          floor={roomData[0]?.floor}
          roomNos={roomData[0]?.roomNos || []}
          onClose={handleClosePopup}
          onRoomSelect={handleRoomSelect}
        />
      )}

      {selectedRoom && <p>Selected Room: {selectedRoom}</p>}
    </div>
  );
};

export default MainPage;
