# react-progress-steps

react-progress-steps

## Quick Start

```bash
npm install react-progress-steps --save
```

```jsx
<ProgressSteps steps={5} current={1} />
```

![](https://cloud.githubusercontent.com/assets/2709086/12774363/042f027a-c9f9-11e5-81dc-56a84ddff7a2.png)

You can disable the custom styling and use your own css.

```jsx
<ProgressSteps steps={5} current={1} styling={false} />
```

```scss
.ProgressSteps {
  &-Dot {
    /* ... */

    &-activated {
      /* ... */
    }

    &-current {
      /* ... */
    }  
  }

  &-Line {
    /* ... */

    &-activated {
      /* ... */
    }
  }
}
```
