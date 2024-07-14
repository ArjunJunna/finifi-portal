const getStatusClass = (status: string) => {
  switch (status) {
    case "Rejected":
      return "text-red-500";
    case "Approved":
      return "text-green-500";
    case "Pending":
      return "text-blue-500";
    default:
      return "text-gray-700";
  }
};

const Table = ({ userview, data }: { userview: string; data: any[] }) => {
  if (data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-700">
        No data exists for the selected view.
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
              <label htmlFor="SelectAll" className="sr-only">
                Select All
              </label>
              <input
                type="checkbox"
                id="SelectAll"
                className="size-5 rounded border-gray-300"
              />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Customer Name
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              POC Name
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              POC Email
            </td>
            {userview === "Requested" ? (
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Requested Date
              </td>
            ) : (
              <>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Submitted Date
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </td>
              </>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((data, index) => (
            <tr key={index}>
              <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                <label className="sr-only" htmlFor={`Row${index + 1}`}>
                  Row {index + 1}
                </label>
                <input
                  className="size-5 rounded border-gray-300"
                  type="checkbox"
                  id={`Row${index + 1}`}
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {data.customerName}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {data.pocName}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {data.pocEmail}
              </td>
              {userview === "Requested" ? (
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.requestedDate}
                </td>
              ) : (
                <>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {data.submittedDate}
                  </td>
                  <td
                    className={`whitespace-nowrap px-4 py-2 ${getStatusClass(
                      data.status
                    )}`}
                  >
                    {data.status}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
