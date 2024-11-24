export default function Input(props) {
  const { className } = props;

  return (
    <input
      {...props}
      className={`block w-full px-4 py-2.5 border-0 rounded-md shadow-sm outline-none  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:ring-palatinate-blue-600 focus:ring-palatinate-blue-600 sm:text-sm sm:leading-6 placeholder:text-xs placeholder:xl:text-sm ${className}`}
    />
  );
}
