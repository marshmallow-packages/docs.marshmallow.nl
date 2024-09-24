---
title: Missing Translations
nextjs:
  metadata:
    title: Helpers
    description: Step by step guide how to install the Translatable package.
---

This package has the abbility to keep track of missing translations. The `simple` translations are already available in a Nova Resource. These are the translations you use in your blade and PHP files.

Your Nova Resources can also be translatable. For instance your blog posts. The `Missing Translations` option keeps track of all the blog posts that have not been translated yet. Below you will find a step by step guide to activate this.

## Activate in your config

If you wish to keep track of your missing translations, you ca activate this in your config file.

```php

/** config/translatable.php */

return [
	// ...
	'missing_translations' => [
		'active' => env('MISSING_TRANSLATIONS_ACTIVE', false),
	],
]
```

## Nova Resource

You can create a new Nova Resource to list all the missing translations. You can create this by running `php artisan nova:resource MissingTranslation`. After you've done this, make sure you extend our version of this Nova Resource.

```php
namespace App\Nova;

use Marshmallow\Translatable\Nova\MissingTranslation as MarshmallowMissingTranslation;

class MissingTranslation extends MarshmallowMissingTranslation
{
    //
}
```

This Nova Resource will list all you missing translations and will give you the option to click to the resource and start translating.

## Nova Metric

<!-- /Users/stef/Sites/Marshmallow/Customers/Marshmallow/docs.marshmallow.nl/public/translatable/ -->
{% figure dark="/translatable/missing-translations/metric-dark.png" light="/translatable/missing-translations/metric-light.png" caption="Automatic translations via the Deepl API" %}
{% /figure %}

We've created a Nova Table Metric which will list the Resources that have missing translations and will show you the count. You can easily click through to start translating.

You can register this metric in one of your Nova Dashboard with the following class.

```php
use Marshmallow\Translatable\Nova\Metric\MissingTranslations;

public function cards()
{
	return [
		MissingTranslations::make()
			->emptyText('All good! No more missing translations.'),
	]
}

```
