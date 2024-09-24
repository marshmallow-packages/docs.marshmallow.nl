---
title: Helpers
nextjs:
  metadata:
    title: Helpers
    description: Step by step guide how to install the Translatable package.
---

## Routes

We have default routes available to use in your frontend so the user can switch there language. Use the route below to do so.

```php
use Marshmallow\Translatable\Models\Language;
$languages = Language::get();

# In your blade file
@foreach($languages as $language)
	<a href="{{ route('set-locale', $language) }}">
		{{ $language->name }}
	</a>
@endforeach
```

---

## Manualy add translations

To manually insert translations, you can use the code below. This allows you to set translations for different languages directly within your application. By specifying the language code and the corresponding translation, you can ensure that your content is accurately translated and displayed to users in their preferred language.

```php
$page->setTranslation('nl', 'name', 'Artikelen');

$page->setTranslation('nl', [
	'name' => 'Artikelen',
]);
```
