import React from "react";
import { useContext } from "react";
import { useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import {searchUsers} from "../../context/github/GithubActions"

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert, removeAlert } = useContext(AlertContext)
  const handleChange = (e) => {
    setText(e.target.value);
    removeAlert();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something !", "error")
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
    }
  };

  const clearSearch = (e) => {
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid px-4 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-md text-black"
                placeholder="Search for users"
                value={text}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={clearSearch}
                className="absolute top-0 right-0 w-12 px-10 text-red-400 h-full rounded-r-lg hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 m-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-md mr-4 btn-outline rounded-l-none text-white w-48"
            type="submit">
            Search users
          </button>
          {users.length > 0 && (
            <button className="btn btn-md bg-red-600 rounded-l-none text-white mt-4 sm:mt-0 md:mt-4 lg:mt-0 w-48 hover:bg-red-600" onClick={() => dispatch({
              type: "CLEAR_USERS"
            })}>
              Clear results
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default UserSearch;
