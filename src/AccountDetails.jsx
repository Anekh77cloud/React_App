import React, { useState } from 'react';

export default function AccountDetails({ user, onSignOut }) {
  const [showMenu, setShowMenu] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold shadow hover:bg-green-200"
        onClick={() => setShowMenu((v) => !v)}
      >
        {user.name}
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border z-50">
          <div className="px-4 py-2 border-b text-gray-700">
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">{user.email}</div>
          </div>
          <button
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
