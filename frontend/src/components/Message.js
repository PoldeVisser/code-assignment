import Avatar from "./atomic/Avatar";

export default function Message({ message, person, datetime }) {
  return (
    <li className="py-4">
      <div className="flex space-x-3">
        <Avatar size="sm" img={person.imageUrl}></Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">{person.name}</h3>
            <p className="text-sm text-gray-500" title={datetime.format("LLL")}>
              {datetime.fromNow()}
            </p>
          </div>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
      </div>
    </li>
  );
}
