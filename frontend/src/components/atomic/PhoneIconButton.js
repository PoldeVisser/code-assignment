import { PhoneIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

export default function PhoneIconButton(phoneNumber) {
  return (
    <div className="flex-1 flex">
      <a
        href={`tel:${phoneNumber}`}
        className="flex-1 space-x-3 inline-flex justify-center py-4 text-sm text-gray-700 font-medium rounded-bl-lg hover:text-gray-500"
      >
        <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        <span>Call</span>
      </a>
    </div>
  );
}

// TODO check if string is valid phone number format, preferably in backend
PhoneIconButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};
