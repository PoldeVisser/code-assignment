import PropTypes from "prop-types";
import classNames from "../../modules/classNames";

export default function Avatar({ img, size }) {
  return (
    <img
      className={classNames(
        "bg-gray-300 rounded-full flex-shrink-0",
        size === "xs" && "w-4 h-4",
        size === "sm" && "w-6 h-6",
        size === "md" && "w-8 h-8",
        size === "lg" && "w-10 h-10",
        size === "xl" && "w-12 h-12"
      )}
      src={img}
      alt=""
    />
  );
}

Avatar.defaultProps = {
  size: "md",
};

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};
