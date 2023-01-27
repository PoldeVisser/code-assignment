import ContactCard from "./molecular/ContactCard";

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
    <ul className="grid m-4 grid-cols-1 space-y-4">
      {people.map((person) => (
        <ContactCard person={person} />
      ))}
    </ul>
  );
}
