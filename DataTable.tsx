import React from 'react';

export interface DataTableProps {
  columns: { Header: string; accessor: string }[];
  data: Record<string, any>[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gradient-to-r from-blue-500 to-green-400 text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-3 text-sm font-semibold uppercase tracking-wide"
              >
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-blue-50 transition`}
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-6 py-3 text-gray-700 text-sm border-t border-gray-200"
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
