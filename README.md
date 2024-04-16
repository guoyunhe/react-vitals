# React Vitals

React components, hooks and utilities to improve web vitals scores (FCP, LCP, CLS, INP)

## AfterVitals

The `<AfterVitals/>` component delay the rendering of children, to not affect FCP, LCP and CLS. It
is useful for non-important and even annoying content, like advertise blocks, survey popups, etc.

However, not all browsers support Web Vitals APIs. When these APIs are not available, the content
will be rendered after 5 seconds anyway. You can use `timeout` prop to control maximum time to wait
in milliseconds.

```jsx
<AfterVitals timeout={3000}>
  <SomeAdvertise />
  <SomeSurvey />
</AfterVitals>
```
