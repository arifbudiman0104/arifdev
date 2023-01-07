# Alert Auto Close

Source : [HyperJs](https://js.hyperui.dev/components/alert-close-auto)


## Usage
### Example 1
```html
<!-- 5000 = 5 Second before hidden -->
<div
  x-cloak
  x-show="showAlert"
  x-data="{ showAlert: true }"
  x-init="setTimeout(() => showAlert = false, 5000)"
  role="alert"
  class="alert"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</div>
```
### Example 2 (with Tailwind and for Laravel)
```html
@if (session('success'))
<div x-cloak x-show="showAlert" x-data="{ showAlert: true }"
    x-init="setTimeout(() => showAlert = false, 5000)" role="alert" class="alert">
    <div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd">
            </path>
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-bold">{{ session('success') }}</span>
        </div>
    </div>
</div>
@endif
```