import type { Meta, StoryObj } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default meta;
type Story = StoryObj<typeof NxWelcome>;

export const Primary: Story = {
  args: {title:meta.title},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome NxWelcome/gi)).toBeTruthy();
  },
};

export const Heading: Story = {
  args: {title:"Lunch Time"},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome Lunch Time/gi)).toBeTruthy();
  },
};
