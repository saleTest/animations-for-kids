"use client";
import { Check, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

const defaultItems: ChecklistItem[] = [
  { id: "1", text: "Odrediti broj dece i uzrast", completed: false },
  { id: "2", text: "Izabrati datum i vreme", completed: false },
  { id: "3", text: "Rezervisati animatore", completed: false },
  { id: "4", text: "Naručiti tortu", completed: false },
  { id: "5", text: "Kupiti dekoracije", completed: false },
  { id: "6", text: "Pripremiti pozivnice", completed: false },
  { id: "7", text: "Organizovati prostor", completed: false },
];

function PlanningChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const savedItems = localStorage.getItem("party-checklist");
    if (savedItems) {
      const parsed = JSON.parse(savedItems);
      setItems(parsed.length > 0 ? parsed : defaultItems);
    } else {
      setItems(defaultItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("party-checklist", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.trim()) {
      const item: ChecklistItem = {
        id: Date.now().toString(),
        text: newItem.trim(),
        completed: false,
      };
      setItems([...items, item]);
      setNewItem("");
    }
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const completedCount = items.filter((item) => item.completed).length;
  const progress = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 space-y-4 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
          <Check className="h-5 w-5 text-green-600 shrink-0" />
          Checklist za planiranje zabave
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {completedCount} od {items.length} stavki završeno (
          {Math.round(progress)}%)
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Novi item input */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Dodaj novu stavku..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
        />
        <button
          onClick={addItem}
          className="flex items-center justify-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
        >
          <Plus className="h-4 w-4" />
          <span className="ml-1 sm:hidden text-sm">Dodaj</span>
        </button>
      </div>

      {/* Lista stavki */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
              className="h-4 w-4 accent-green-500 shrink-0"
            />
            <span
              className={`flex-1 text-sm sm:text-base ${
                item.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {item.text}
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:text-red-700 shrink-0"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanningChecklist;
