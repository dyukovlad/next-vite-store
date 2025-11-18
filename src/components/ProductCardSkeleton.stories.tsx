import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

const meta: Meta<typeof ProductCardSkeleton> = {
  title: 'Components/ProductCardSkeleton',
  component: ProductCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};