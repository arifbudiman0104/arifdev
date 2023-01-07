# ngrok

ngrok is a tool that allows you to expose a web server running on your local machine to the internet. Any request sent to the ngrok URL will be forwarded to your local machine.

Its work out of the box on Laravel `8.*.*`, even with laragon its work just fine, but with Laravel `9.*.*` need some configuration, because Laravel `9.*.*` use nodejs to compile assets and auto reload, so we need to run to compile assets and to run laravel project.

Note: I use laragon to run laravel project, so I don't know if this work on other environment and `Laragon 5` just so buggy to run ngrok, better to use `Laragon <5`.

## Run Laravel Project

```bash
php artisan serve
```

## Run NPM
    
```bash
npm run dev
```

## Command
```bash
ngrok http http://127.0.0.1:8000/
```