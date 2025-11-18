import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from './ErrorBoundary';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Component that throws an error
const ErrorThrowingComponent = () => {
  throw new Error('This is a test error from ErrorBoundary story');
};

export const Default: Story = {
  args: {
    children: <ErrorThrowingComponent />,
  },
};

export const WithValidContent: Story = {
  args: {
    children: <div>This content renders normally without errors.</div>,
  },
};