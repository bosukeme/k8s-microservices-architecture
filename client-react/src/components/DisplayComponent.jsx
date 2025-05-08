import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { FaGear } from "react-icons/fa6";

const DisplayComponent = ({ url, timezone }) => {
  const [data, setData] = useState({ api: "", now: "Loading..." });
  const [loading, setLoading] = useState(true);

  const convertToTimezone = (dateString, timeZone) => {
    if (!dateString) return "";
    const date = moment(dateString);
    return date.tz(timeZone).format("MM/DD/YYYY, HH:mm:ss");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData({
          ...response.data,
          now: convertToTimezone(response.data.now, timezone),
        });
      } catch {
        setData({ api: "Error", now: "Failed to fetch data" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [url, timezone]);

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center transition duration-500 transition-discrete transform hover:-translate-y-1 hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {data.api ? data.api.toUpperCase() : "API"}
        </h2>
        <p className="text-gray-600 text-lg">
          {data.now ? data.now : "No data available"}
        </p>
      </div>
      <FaGear className="text-blue-500 animate-spin" size={30} />
    </div>
  );
};

export default DisplayComponent;
