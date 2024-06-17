[English](./README.md) | **中文**

# React Vitals

用于提升 [Web Vitals](https://web.dev/articles/vitals?hl=zh-cn) 评分 (FCP, LCP, CLS, INP) 的 React 组件，钩子和工具集合。

## SlowSkip

SlowSkip 是当页面首次加载速度较慢时进行降级，跳过某些非功能组件的渲染，比如广告等。

默认的阻断窗口期为 1.5s 到 10s：

```jsx
import { SlowSkip } from 'react-vitals';

<SlowSkip>
  <div>广告，横幅，不重要的弹窗等</div>
</SlowSkip>;
```

如果需要调整阻断窗口，可以调整 `start` 和 `end` 属性：

```jsx
import { SlowSkip } from 'react-vitals';

<SlowSkip start={1200} end={15000}>
  <div>广告，横幅，不重要的弹窗等</div>
</SlowSkip>;
```
