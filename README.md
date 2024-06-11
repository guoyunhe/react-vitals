# React Vitals

React components, hooks and utilities to improve web vitals scores (FCP, LCP, CLS, INP)

## SlowSkip

## DelayLoad

The `<DelayLoad/>` component delay the rendering of children, to not affect FCP, LCP and CLS. It
is useful for non-important and even annoying content, like advertise blocks, survey popups, etc.
You can use `timeout` prop (default: 3000) to control maximum milliseconds to wait before rendering. Usually,
`timeout` should be larger than the LCP you want to achieve.

```jsx
import { DelayLoad } from 'react-vitals';

const Advertise = () => <div style={{ height: 400, background: 'orange' }}>Advertise loaded!</div>;
const Survey = () => <div style={{ height: 400, background: 'green' }}>Survey loaded!</div>;

render(
  <DelayLoad timeout={100}>
    <Advertise />
    <Survey />
  </DelayLoad>,
);
```
