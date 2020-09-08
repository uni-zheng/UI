import React from 'react';
import { Button } from '../../Button';
import { createToast } from '../createToast';

ToastDemo.displayName = 'Demo';

const {
  ToastProvider,
  useToast,
} = createToast();

function ToastDemo() {
  return (
    <div
      style={{
        width: 400,
        height: 400,
        border: 'solid 1px'
      }}
    >
      <ToastProvider>
        <App />
      </ToastProvider>
    </div>
  );
}

function App() {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast.show(Date.now())
      }}
    >
      显示一个
    </Button>
  )
}

export default ToastDemo;