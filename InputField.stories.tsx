import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';
import { InputFieldProps } from './InputField.types';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] }
  }
};

export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'outlined',
    size: 'md'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    clearable: true
  }
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    invalid: true,
    errorMessage: 'Invalid email address'
  }
};

export const Loading: Story = {
  args: {
    label: 'Search',
    placeholder: 'Loading...',
    loading: true
  }
};
