# use-responsive-lib

## Information

<table>
<tr>
<td>Package</td><td>use-responsive-lib</td>
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
$ npm install use-responsive-lib --save
```

### Yarn

```console
$ yarn add use-responsive-lib
```

## Usage

### Hooks

```jsx
import { useResponsive } from "use-responsive-lib"

const ExampleComponent = () => {
  const isMobile = useResponsive({ max: 768 })
  const isTablet = useResponsive({ min: 768, max: 1024 })
  const isTabletOrDesktop = useResponsive({ min: 768 })
  const isDesktop = useResponsive({ min: 1024 })

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
import { Responsive } from "use-responsive-lib"

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
