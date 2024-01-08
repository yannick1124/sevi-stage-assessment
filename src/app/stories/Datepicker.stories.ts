import type { Meta, StoryObj } from '@storybook/react';

import Datapicker from '../Datepicker';

const meta: Meta<typeof Datapicker> = {
  component: Datapicker,
  title: 'Datapicker'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  }
}