[English](./README.md) | **中文**

# React Vitals

用于提升 [Web Vitals](https://web.dev/articles/vitals?hl=zh-cn) 评分 (FCP, LCP, CLS, INP) 的 React 组件，钩子和工具集合。

## SlowSkip

SlowSkip 是当页面首次加载速度较慢时进行降级，跳过某些非功能组件的渲染，比如广告等。

默认的阻断窗口期为 1.5s 到 10s。Google 设定的 LCP 优的标准是 2.5s，按照经验图片等内容的平均加载时间为 1s 左右，2.5s 减去 1s 就得到了 1.5s 的默认值。

```jsx
import { SlowSkip } from 'react-vitals';

<SlowSkip>
  <div>广告，横幅，不重要的弹窗等</div>
</SlowSkip>;
```

默认阻断窗口毕竟只是一个经验值，并非适用于所有场合。你需要根据实际 Web Vitals 统计数据来调整 `start` 值，以避免数值太小导致内容展示率过低，或者数值太大导致 LCP 无变化。`end` 的值通常不需要调整，但是如果你想的话，也是可以的。

```jsx
import { SlowSkip } from 'react-vitals';

<SlowSkip start={1200} end={15000}>
  <div>广告，横幅，不重要的弹窗等</div>
</SlowSkip>;
```
