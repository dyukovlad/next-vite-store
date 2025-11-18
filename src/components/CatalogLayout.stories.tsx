import type { Meta, StoryObj } from '@storybook/react';
import { CatalogLayout } from './CatalogLayout';

const meta: Meta<typeof CatalogLayout> = {
  title: 'Components/CatalogLayout',
  component: CatalogLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <p>This is content inside the CatalogLayout.</p>
        <p>It provides consistent styling and structure.</p>
      </div>
    ),
  },
};

export const WithSearch: Story = {
  args: {
    children: (
      <div>
        <input
          type="text"
          placeholder="Search products..."
          className="mb-4 p-2 border rounded"
        />
        <p>Search input and content area.</p>
      </div>
    ),
  },
};