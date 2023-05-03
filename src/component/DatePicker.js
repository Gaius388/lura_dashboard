import React, { useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState("2022-03-30");

  return (
    <input
          type="date"
          value={date}
      onChange={(e) => setDate(e.target.value)}
      className="flex items-center px-2 py-0.5 bg-gray-200 rounded-md relative"
    />
  );
};

export default DatePicker;
