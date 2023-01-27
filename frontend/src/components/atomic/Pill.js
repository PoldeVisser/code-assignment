import PropTypes from "prop-types";
import classNames from "../../modules/classNames";

export default function Pill({ role, color }) {
  return (
    <span
      className={classNames(
        "flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full",
        color === "green" && "bg-green-100 text-green-800"
      )}
    >
      {role}
    </span>
  );
}

Pill.defaultProps = {
  color: "green",
};

Pill.propTypes = {
  color: PropTypes.string.isRequired,
};
