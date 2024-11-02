import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import useFetch from "../../../../hooks/useFetch";
import RequestStore from "../../../../store/RequestStore";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

export default function TodoLists() {
  const { id } = JSON.parse(localStorage.getItem("user"));
  const { store, destroy, get } = RequestStore((state) => state);
  const [lists, setLists] = useState([]);
  const [newTask, setNewTask] = useState(""); // state to track new tasks
  const { data, isLoading } = useFetch(`todoLists?user_id=${id}`);

  // Load initial todo list data
  useEffect(() => {
    if (data) {
      setLists(data);
    }
  }, [data]);

  // Handle checkbox toggle
  const handleToggle = async (id) => {
    try {
      const res = get(`todoLists/${id}`);
      const updatedLists = lists.map((i) => {
        if (i?.id === id) {
          return { ...i, status: !i.status };
        }
        return i;
      });
      setLists(updatedLists);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  // Handle task removal
  const handleRemove = async (id) => {
    try {
      await destroy(`todoLists/${id}`);
      const updatedLists = lists.filter((i, _) => i?.id !== id);
      setLists(updatedLists);
    } catch (err) {
      alert(err);
    }
  };

  // Handle adding new tasks
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return; // don't allow empty tasks
    try {
      const res = await store("todoLists", { todo: newTask });
      if (res?.status === "success") {
        setLists([
          ...lists,
          {
            id: lists[lists.length - 1]?.id + 1 || 1,
            todo: newTask,
            status: false,
          },
        ]);
        setNewTask(""); // reset input
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="shadow-primary  mt-3 pt-1 pb-4 overflow-hidden rounded-lg bg-white">
      <span className="text-sm block px-4 font-semibold text-gray-600 py-2 border-b-[1.5px] border-gray-100">
        Todo List
      </span>

      {/* Render todo list */}
      <ul className="w-full text-sm font-medium mt-2 text-gray-900 bg-white dark:text-white">
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          lists.map((item, index) => (
            <li key={index} className="w-full flex justify-between">
              <div className="flex w-full px-5 justify-between items-center">
                <div className="flex items-center">
                  <input
                    id={`todo-${index}`}
                    type="checkbox"
                    checked={item.status}
                    onChange={() => handleToggle(item?.id)}
                    className="w-4 h-4 text-blue-600 outline-none bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`todo-${index}`}
                    className={`w-full py-3 ms-2 text-sm font-medium ${
                      item.status === "done"
                        ? "line-through text-gray-500"
                        : "text-gray-900"
                    }`}
                  >
                    {item.todo}
                  </label>
                </div>
                <button
                  onClick={() => handleRemove(item?.id)} // remove task
                  className="text-gray-400 text-lg"
                >
                  <IoClose />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {/* Add new task input */}
      <form onSubmit={handleAddTask} className="flex px-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Write new Task then press enter..."
          className="flex-1 pl-3 p-2 placeholder:text-sm border-none rounded-md outline-none focus:outline-none focus:ring-0"
        />
      </form>
    </div>
  );
}
