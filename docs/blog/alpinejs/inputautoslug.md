# Input Auto Slug

Source : [HyperJs](https://js.hyperui.dev/components/input-slug)

## Install

### With a CDN
```html
<script defer src="https://unpkg.com/alpinejs-slug@latest/dist/slug.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```
### With Package Manager
```bash
npm i -D alpinejs-slug
yarn add -D alpinejs-slug
```
```js
import Alpine from 'alpinejs'
import slug from 'alpinejs-slug'
Alpine.plugin(slug)
Alpine.start()
```

## Usage
### Example 1
```html
<form x-data="{ title: '' }">
  <label for="title">Title</label>
  <input type="text" id="title" x-model="title" />
  <label for="slug">Slug</label>
  <input type="text" id="slug" x-slug="title" />
</form>
```
### Example 2
```html
<div x-data="{ inputTitle: 'Hello World' }" class="flex gap-4">
  <input
    x-model="inputTitle"
    type="text"
    placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
    class="form-input"
  />

  <input
    x-slug="inputTitle"
    type="text"
    placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
    class="form-input"
  />
</div>
```