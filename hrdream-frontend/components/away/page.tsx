import React from "react";
import Image from "next/image";

const data = [
  {
    name: "George Clooney",
    role: "Strategist",
    avatar: "/avatar1.png",
    away: [16, 17, 18, 19, 20],
  },
  {
    name: "Miley Codus",
    role: "Frontend Developer",
    avatar: "/avatar2.png",
    away: [],
  },
  {
    name: "Sara Buyer",
    role: "Social Media Specialist",
    avatar: "/avatar3.png",
    away: [22, 23, 24],
  },
  {
    name: "Louis Blues",
    role: "Senior Designer",
    avatar: "/avatar4.png",
    away: [23, 24],
  },
  {
    name: "Josh Hopkins",
    role: "PR Manager",
    avatar: "/avatar5.png",
    away: [],
  },
  {
    name: "Jozef Fedor",
    role: "Sales Manager",
    avatar: "/avatar6.png",
    away: [16],
  },
  {
    name: "Frederika Frederiksen",
    role: "CEO",
    avatar: "/avatar7.png",
    away: [27],
  },
];

const WhoIsAway = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Who’s away</h1>
        <div className="flex space-x-4">
          <button className="text-blue-500 underline">Add to calendar</button>
          <button className="text-blue-500 underline">Filter</button>
        </div>
      </div>
      <p className="text-gray-500 mb-6">7 people away this month</p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="w-40 p-2 text-left text-gray-700 font-semibold">Name</th>
              <th className="p-2 text-left text-gray-700 font-semibold">Role</th>
              {days.map((day) => (
                <th
                  key={day}
                  className="p-2 text-center text-gray-500 font-medium border border-gray-300"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index} className="odd:bg-gray-50">
                <td className="p-2 flex items-center space-x-2 font-medium text-gray-800">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{person.name}</span>
                </td>
                <td className="p-2 text-gray-600">{person.role}</td>
                {days.map((day) => (
                  <td
                    key={day}
                    className={`p-2 text-center border border-gray-300 ${
                      person.away.includes(day)
                        ? "bg-red-200 text-red-600"
                        : ""
                    }`}
                  >
                    {person.away.includes(day) ? "Away" : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button className="text-blue-500 underline">&larr; Previous</button>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
          <button className="px-3 py-1 text-blue-500 border border-blue-500 rounded">
            2
          </button>
          <button className="px-3 py-1 text-blue-500 border border-blue-500 rounded">
            3
          </button>
        </div>
        <button className="text-blue-500 underline">Next &rarr;</button>
      </div>
    </div>
  );
};

export default WhoIsAway;
