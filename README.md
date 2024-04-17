# React Vitals

React components, hooks and utilities to improve web vitals scores (FCP, LCP, CLS, INP)

## AfterLCP

The `<AfterLCP/>` component delay the rendering of children, to not affect FCP, LCP and CLS. It
is useful for non-important and even annoying content, like advertise blocks, survey popups, etc.

However, not all browsers support Web Vitals APIs. When these APIs are not available, the content
will be rendered after 5 seconds anyway. You can use `timeout` prop to control maximum time to wait
in milliseconds. Usually, `timeout` should be larger than the LCP you want to achieve.

```jsx
import { AfterLCP } from 'react-vitals';

const Advertise = () => <div>Advertise loaded...</div>;
const Survey = () => <div>Survey loaded...</div>;

render(
  <AfterLCP timeout={10000}>
    <Advertise />
    <Survey />
  </AfterLCP>,
);
```
