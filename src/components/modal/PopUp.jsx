
const PopUp = ({ message }) => {

  return (
    <div
      role="alert"
      className={`rounded-xl border border-gray-100 ${message.status ? "bg-white" : "bg-red-50"} p-4 fixed bottom-5 right-5 motion-translate-x-in-25`}>
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          {message.status === false ?  <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#991B1B"
            className="size-5">
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg> :
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
          }
        </span>

        <div className="flex-1">
          <strong
            className={`block font-medium ${
              message.status ? "text-gray-900" : "text-red-800"
            } `}>
            {message.message}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
