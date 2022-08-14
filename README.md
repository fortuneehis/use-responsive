# use-responsive

## Information

<table>
<tr>
<td>Package</td><td>use-responsive</td>
</tr>
<tr>
<td>Description</td>
<td>A react package for responsive design :)</td>
</tr>
<tr>
<td>Browser Version</td>
<td>>= IE6*</td>
</tr>
</table>

## Install

### NPM

```console
$ npm install use-responsive --save
```

### Yarn

```console
$ yarn add use-responsive
```

## Usage

### Hooks

```jsx
import { useResponsive } from "use-responsive"

const ExampleComponent = () => {
  const isMobile = useMediaQuery({ max: 768 })
  const isTablet = useMediaQuery({ min: 768, max: 1024 })
  const isTabletOrDesktop = useMediaQuery({ min: 768 })
  const isDesktop = useMediaQuery({ min: 1024 })

  return (
    <div>
      {isMobile ? <p>Mobile</p> : null}
      {isTablet ? <p>Tablet</p> : null}
      {isTabletOrDesktop ? <p>TabletOrDesktop</p> : null}
      {isDesktop ? <p>Desktop</p> : null}
    </div>
  )
}

export default ExampleComponent
```

### With Components

```jsx
import { Responsive } from "use-responsive"

const ExampleComponent = () => (
  <div>
    <h1>Device Test!</h1>
    <Responsive max={768}>
      <p>Mobile</p>
    </Responsive>
    <Responsive min={768} max={1024}>
      <p>Tablet</p>
    </Responsive>
    <Responsive min={768}>
      <p>TabletOrDesktop</p>
    </Responsive>
    <Responsive min={1024}>
      <p>Desktop</p>
    </Responsive>
  </div>
)

export default ExampleComponent
```

## Properties

`min` - An optional property for setting the minimum constraint.

`max` - An optional property for setting the maximum constraint.

`direction` - An optional property for setting the direction to either horizontal for width or vertical for height. (defaults to "horizontal")

## Browser Support

### Out of the box

<table>
<tr>
<td>Chrome</td>
<td>9</td>
</tr>
<tr>
<td>Firefox (Gecko)</td>
<td>6</td>
</tr>
<tr>
<td>MS Edge</td>
<td>All</td>
</tr>
<tr>
<td>Internet Explorer</td>
<td>10</td>
</tr>
<tr>
<td>Opera</td>
<td>12.1</td>
</tr>
<tr>
<td>Safari</td>
<td>5.1</td>
</tr>
</table>
