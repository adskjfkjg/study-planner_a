import type { Meta, StoryObj } from '@storybook/react-vite';

import Require from './require';

const meta = {
  component: Require,
} satisfies Meta<typeof Require>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};