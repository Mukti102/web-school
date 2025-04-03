import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../../../api/api";

const API_URL = BASE_URL + "menu"; // Sesuaikan dengan API-mu

function Menus() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState(true);
  const [subMenus, setSubMenus] = useState([{ name: "", link: "" }]);
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  // 🔹 GET: Ambil data menu dari API
  const get = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_URL);
      setData(res.data?.data); // Pastikan API mengembalikan array
    } catch (error) {
      console.error("Error fetching menus:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get();
  }, []); // Load data saat komponen pertama kali di-mount

  // 🔹 POST / PUT: Tambah atau update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, link, sub_menu: subMenus, status };

    try {
      const url = editId ? `${API_URL}/${editId}` : API_URL;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json();
      console.log("Response:", responseData);

      if (!res.ok)
        throw new Error(responseData.message || "Gagal menyimpan data");

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Berhasil menyimpan data",
      });

      await get(); // Refresh data setelah submit
      resetForm();
    } catch (error) {
      console.error("Error saving menu:", error);
    }
  };

  // 🔹 DELETE: Hapus data
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        await get(); // Refresh setelah hapus
        Swal.fire("Deleted!", "Menu has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting menu:", error);
        Swal.fire("Error", "Failed to delete menu.", "error");
      }
    }
  };

  // 🔹 Edit: Isi form dengan data yang dipilih
  const handleEdit = (menu) => {
    setEditId(menu.id);
    setLink(menu.link ? menu.link : "");
    setName(menu.name);
    setSubMenus(JSON.parse(menu?.sub_menu || "[]"));
    setStatus(menu.status);

    // scroll to form ref
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Reset Form
  const resetForm = () => {
    setName("");
    setLink("");
    setSubMenus([{ name: "", link: "" }]);
    setStatus(true);
    setEditId(null);
  };

  // 🔹 Handler Sub Menu
  const handleSubMenuChange = (index, key, value) => {
    const updatedSubMenus = [...subMenus];
    updatedSubMenus[index][key] = value;
    setSubMenus(updatedSubMenus);
  };

  const addSubMenu = () => setSubMenus([...subMenus, { name: "", link: "" }]);
  const removeSubMenu = (index) =>
    setSubMenus(subMenus.filter((_, i) => i !== index));

  return (
    <div ref={formRef} className="w-full mx-auto p-0">
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {editId ? "✏️ Edit Menu" : "➕ Tambah Menu"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 ">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Menu Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Main Menu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link Menu
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Link Menu"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={status}
              onChange={() => setStatus(!status)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-600">Active Menu</label>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Sub Menus 🔗
            </h3>

            {subMenus.map((sub, index) => (
              <div key={index} className="flex gap-3 mb-3">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Submenu Name"
                    value={sub.name}
                    onChange={(e) =>
                      handleSubMenuChange(index, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Link URL"
                    value={sub.link}
                    onChange={(e) =>
                      handleSubMenuChange(index, "link", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSubMenu(index)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addSubMenu}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
              <span className="mr-1">+</span> Add Submenu
            </button>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors"
            >
              {editId ? "Update Menu" : "Create Menu"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Menu List Section */}
      <div className=" rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Menu List ({data?.length})
        </h2>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {data?.map((menu) => (
              <div
                key={menu.id}
                className="group  border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-medium text-gray-800">
                        {menu.name} {"->"}{" "}
                        <a
                          href={menu?.link}
                          className="text-blue-500 text-sm hover:underline"
                        >
                          {menu?.link}
                        </a>
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          menu.status
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {menu.status ? "Active" : "Inactive"}
                      </span>
                    </div>

                    {menu.sub_menu && (
                      <div className="ml-4 space-y-1">
                        {JSON.parse(menu.sub_menu).map((sub, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className="mr-2">↳</span>
                            <span className="font-medium">{sub.name}</span>
                            <span className="mx-2">-</span>
                            <a
                              href={sub.link}
                              className="text-blue-600 hover:underline truncate"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sub.link || "No link"}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(menu)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(menu.id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {data?.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No menus found. Start by creating a new menu.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menus;
