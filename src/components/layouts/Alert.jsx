import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FaTimesCircle } from "react-icons/fa"

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-center px-4 mb-6 space-x-2">
        {alert.type === "error" && (
          <FaTimesCircle className="inline-block text-red-500 text-lg" />
        )}
        <p className="flex-1 text-base font-semibold leading-8 text-red-500">
          {alert.msg}
        </p>
      </p>
    )
  );
}

export default Alert;
