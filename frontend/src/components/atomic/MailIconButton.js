import { MailIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

export default function MailIconButton(email) {
  return (
    <div className="flex-1 flex">
      <a
        href={`mailto:${email}`}
        className="flex-1 space-x-3 inline-flex justify-center py-4 text-sm text-gray-700 font-medium rounded-bl-lg hover:text-gray-500"
      >
        <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        <span>Email</span>
      </a>
    </div>
  );
}

// TODO check if string is valid email format, preferably in backend
MailIconButton.propTypes = {
  email: PropTypes.string.isRequired,
};
