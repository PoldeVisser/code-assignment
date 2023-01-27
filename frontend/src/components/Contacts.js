import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import MailIconButton from "./atomic/MailIconButton";
import PhoneIconButton from "./atomic/PhoneIconButton";
import Pill from "./atomic/Pill";

const people = [
  {
    email: "collega-a@bedrijf.nl",
    name: "Silvia van Buren",
    title: "Front Office",
    role: "testrole",
    imageUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    telephone: "+31600000000",
  },
  {
    email: "hans@bedrijf.nl",
    name: "Hans van Willigen",
    title: "Lead Developer",
    role: null,
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    telephone: null,
  },
];

export default function Contacts() {
  return (
    <ul role="list" className="grid m-4 grid-cols-1 space-y-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {person.name}
                </h3>
                {person.role && <Pill role={person.role} />}
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {person.title}
              </p>
            </div>
            <img
              className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
              src={person.imageUrl}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <MailIconButton email={person.email} />
              <PhoneIconButton phoneNumber={person.telephone} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
