# Scroll Amount

Source : [HyperJs](https://js.hyperui.dev/components/scroll-amount)

## Install

### With a CDN
```html
<script defer src="https://unpkg.com/alpinejs-scroll-amount@latest/dist/scroll-amount.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```
### With Package Manager
```bash
yarn add -D alpinejs-scroll-amount
npm install -D alpinejs-scroll-amount
```
```js
import Alpine from 'alpinejs'
import scrollAmount from 'alpinejs-scroll-amount'
Alpine.plugin(scrollAmount)
Alpine.start()
```

## Usage
### Example 1
```html
<div
  x-cloak
  x-show="showAlert"
  x-data="{ showAlert: true }"
  x-init="setTimeout(() => showAlert = false, 5000)"
  role="alert"
  class="alert">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</div>
```