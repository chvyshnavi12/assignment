import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import type { DataTableProps } from './DataTable';

const meta: Meta<DataTableProps> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

type Story = StoryObj<DataTableProps>;

export const Default: Story = {
  args: {
    columns: [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Role', accessor: 'role' },
    ],
    data: [
      { name: 'Alice', age: 25, role: 'Developer' },
      { name: 'Bob', age: 30, role: 'Designer' },
      { name: 'Charlie', age: 28, role: 'Manager' },
    ],
  },
};
