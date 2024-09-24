---
title: Auto translate
nextjs:
  metadata:
    title: Helpers
    description: Step by step guide how to install the Translatable package.
---

## Deepl

We have an integration with Deepl to make translating a lot easier. When you activate this option a "Translate with Deepl" button will be shown below your translatable field so you can translate them with just one mouse click.

{% figure dark="/translatable/auto-translate/demo-dark-mode.gif" light="/translatable/auto-translate/demo-light-mode.gif" caption="Automatic translations via the Deepl API" %}
{% /figure %}

## Environment variables

To activate this function, you need to update the following environment variables.

```env
TRANSLATABLE_DEEPL_API_KEY=___KEY_HERE___
TRANSLATABLE_AUTO_TRANSLATOR_ACTIVE=true
```

## Config variables

Or you can do this directly in the config file.

```php

/** config/translatable.php */

return [
	// ...
	'deepl' => [
		'api_path' => env('TRANSLATABLE_DEEPL_API_PATH', 'https://api-free.deepl.com'),
		'api_key' => env('TRANSLATABLE_DEEPL_API_KEY'),
	],

	'auto_translator' => [
		'active' => env('TRANSLATABLE_AUTO_TRANSLATOR_ACTIVE', false),
	],
]
```
