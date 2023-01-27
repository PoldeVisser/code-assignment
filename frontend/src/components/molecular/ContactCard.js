import { useState } from "react";
import Card from "../atomic/Card";
import Avatar from "../atomic/Avatar";
import Pill from "../atomic/Pill";
import MailIconButton from "../atomic/MailIconButton";
import PhoneIconButton from "../atomic/PhoneIconButton";
import { StarIcon } from "@heroicons/react/solid";
import classNames from "../../modules/classNames";

export default function ContactCard({ person }) {
  const [isFavourite, setFavourite] = useState(false);

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
          <div className="flex items-center space-x-3">
            <Avatar size="xl" img={person.imageUrl} />
            {/* TODO implement [UPDATE]/contacts/id/isFavourite call on click */}
            <button onClick={() => setFavourite((isFavourite) => !isFavourite)}>
              <StarIcon
                className={classNames(
                  "w-5 h-5",
                  isFavourite ? "text-yellow-500" : "text-gray-400"
                )}
                aria-hidden="true"
              />
            </button>
          </div>
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
