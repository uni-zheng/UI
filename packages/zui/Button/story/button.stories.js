import React, { Fragment } from 'react';
import Button from '../Button.js';
import '../style/index.scss';

export default {
  title: 'ZUI/Button/Button',
  component: Button,
};

export const Base = () => (
  <Button>base</Button>
);

export const ColorType = () => (
  <Fragment>
    <Button>
      default
    </Button>

    <Button
      colorType="success"
    >
      success
    </Button>
    <Button
      colorType="warning"
    >
      warning
    </Button>
    <Button
      colorType="danger"
    >
      danger
    </Button>
  </Fragment>
)

export const SiblingButton = () => (
  <Fragment>
    <Button>left</Button>
    <Button>right</Button>
  </Fragment>
)
