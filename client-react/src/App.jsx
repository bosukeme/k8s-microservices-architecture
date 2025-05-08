import { useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import { SiKubernetes } from "react-icons/si";

const App = () => {
  const [timezone, setTimezone] = useState("UTC");

  const timezoneOptions = [
    { label: "UTC", value: "UTC" },
    { label: "WAT (West Africa Time) +1", value: "Africa/Lagos" },
    { label: "CET (Central European Time) +1", value: "Europe/Berlin" },
    { label: "PST (Pacific Standard Time) -8", value: "America/Los_Angeles" },
    { label: "EST (Eastern Standard Time) -5", value: "America/New_York" },
    { label: "IST (India Standard Time) +5:30", value: "Asia/Kolkata" },
  ];

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-700">
      <h1 className="text-4xl font-bold text-white flex items-center gap-2">
        <SiKubernetes className="text-blue-500" size={32} />
        Kubernetes API Backend
      </h1>

      <div className="mb-4 bg-blue-300 rounded-lg">
        <select
          value={timezone}
          onChange={handleTimezoneChange}
          className="p-2 rounded-lg text-black"
        >
          {timezoneOptions.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>

      <DisplayComponent url="http://api-flask.io/" timezone={timezone} />
      <DisplayComponent url="http://api-node.io/" timezone={timezone} />
    </div>
  );
};

export default App;
