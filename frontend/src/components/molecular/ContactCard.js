import Card from "../atomic/Card";
import Avatar from "../atomic/Avatar";
import Pill from "../atomic/Pill";
import MailIconButton from "../atomic/MailIconButton";
import PhoneIconButton from "../atomic/PhoneIconButton";

export default function ContactCard({ person }) {
  return (
    <Card>
      <li className="flex-1 divide-y divide-gray-200">
        <div className="flex items-center justify-between p-6 space-x-6">
          <div className="truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                {person.name}
              </h3>
              {person.role && <Pill role={person.role} />}
            </div>
            <p className="text-gray-500 text-sm truncate">{person.title}</p>
          </div>
          <Avatar size="xl" img={person.imageUrl}></Avatar>
        </div>
        <div className="flex divide-x divide-gray-200">
          {person.email && <MailIconButton email={person.email} />}

          {person.telephone && (
            <PhoneIconButton phoneNumber={person.telephone} />
          )}
        </div>
      </li>
    </Card>
  );
}
