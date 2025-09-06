const SampleData = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          AWS Task Manager Sample Data
        </h2>

        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-[#232F3E] text-white">
            <tr>
              <th className="text-left py-3 px-6 border-r border-gray-400">
                UserId
              </th>
              <th className="text-left py-3 px-6">TaskId</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[#FFF3E0]">
              <td className="py-3 px-6 border-r border-gray-300 text-[#FF9900] font-semibold cursor-pointer underline">
                user123
              </td>
              <td className="py-3 px-6 break-all text-gray-800">
                14564987-795b-449e-965b-14e3f4d6634b
              </td>
            </tr>
            <tr className="hover:bg-[#FFF3E0]">
              <td className="py-3 px-6 border-r border-gray-300 text-[#FF9900] font-semibold cursor-pointer underline">
                user789
              </td>
              <td className="py-3 px-6 break-all text-gray-800">
                374ae1e6-aaa7-4d00-9784-f8c0ef20611a
              </td>
            </tr>
            <tr className="hover:bg-[#FFF3E0]">
              <td className="py-3 px-6 border-r border-gray-300 text-[#FF9900] font-semibold cursor-pointer underline">
                user456
              </td>
              <td className="py-3 px-6 break-all text-gray-800">
                18bcdc44-53d7-4b2d-ab2d-478fbcbc9e26
              </td>
            </tr>
            <tr className="hover:bg-[#FFF3E0]">
              <td className="py-3 px-6 border-r border-gray-300 text-[#FF9900] font-semibold cursor-pointer underline">
                user999
              </td>
              <td className="py-3 px-6 break-all text-gray-800">
                979370f3-1218-4221-82b4-57ff0b6339cc
              </td>
            </tr>
            <tr className="hover:bg-[#FFF3E0]">
              <td className="py-3 px-6 border-r border-gray-300 text-[#FF9900] font-semibold cursor-pointer underline">
                user001
              </td>
              <td className="py-3 px-6 break-all text-gray-800">
                e02b2bf1-c966-478f-84ca-b09ad64ff303
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SampleData;
