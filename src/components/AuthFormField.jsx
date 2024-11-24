import { useState } from "react";
import { Link } from "react-router-dom";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
import PasswordChecklist from "./PasswordChecklist";

/**
 * Component that renders a dynamic input field for auth pages
 */
export default function AuthFormField(props) {
  const {
    label,
    type,
    placeholder,
    value,
    error,
    onValueChange,
    forgotPassword,
    onFocus,
    passwordChecklist,
  } = props;

  const [toggleEye, setToggleEye] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === " " && value.trim() === "") {
      event.preventDefault();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        <span className="text-xs text-red-500 ms-[2px]">*</span>
      </label>
      <div className="relative mt-1">
        <input
          id={type}
          name={type}
          type={toggleEye ? type : "text"}
          placeholder={placeholder}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={(ev) => onValueChange(ev.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`block w-full mb-2 rounded-md border-0 px-4 pr-6 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none ${
            error.trim() === ""
              ? "focus:ring-palatinate-blue-600 hover:ring-palatinate-blue-600 "
              : "ring-red-600 focus:ring-red-600 hover:ring-red-600"
          }  transition-all`}
        />
        {error.trim() !== "" && !passwordChecklist && (
          <p className="absolute left-0 top-[109%] text-xs text-red-500 ">
            {error}
          </p>
        )}
        {type === "password" && (
          <div
            className="absolute top-[50%] translate-y-[-50%] right-2 focus:animate-spin"
            onClick={() => setToggleEye(!toggleEye)}
          >
            {toggleEye ? (
              <EyeSlashIcon className="w-4 h-4 text-gray-400" />
            ) : (
              <EyeIcon className="w-4 h-4 text-gray-400" />
            )}
          </div>
        )}
      </div>
      {passwordChecklist && isFocused && error.trim() !== "" && (
        <PasswordChecklist password={value} />
      )}
      {forgotPassword && (
        <div className="flex items-center justify-between mt-2 text-sm leading-6 absolute top-[-8px] right-0 ">
          <Link
            to={"/forgotPassword"}
            className="font-semibold text-palatinate-blue-600 hover:text-palatinate-blue-500 focus:ring-1 p-[2px] ring-palatinate-blue-600 rounded"
          >
            Forgot password?
          </Link>
        </div>
      )}
    </div>
  );
}
