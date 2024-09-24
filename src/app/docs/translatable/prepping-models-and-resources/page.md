---
title: Prepping Models and Resources
nextjs:
  metadata:
    title: Prepping Models and Resources
    description: Step by step guide how to install the Translatable package.
---



---

## Models

The only thing you need to do to prepare your model to use translations is adding the `Translatable` trait to all the models you want to be translated.

```php
use Marshmallow\Translatable\Traits\Translatable;

class Page extends Model
{
	use Translatable;
}
```

---

## Nova Resources

The only thing you need to do to prepare your nova resources to use translations is adding the `TranslatableFields` trait to all the models you want to be translated and change the `fields` method to `translatableFields`. The trait you are adding implements the fields method for you. When you are not translating a resource, it will just return the fields from translatableFields to Nova so you can edit all your fields. If you are translating, it will delete all the fields that you didn't include in you translatable columns. Please check the `options chapter` of this documentation to checkout how you can **exclude columns/fields** from translations.

```php
use Marshmallow\Translatable\Traits\TranslatableFields;

class Page extends Resource
{
	use TranslatableFields;

	//...

	public function translatableFields(Request $request)
    {
    	//
    }
}
```

---

## Tabs

If you are using the `Eminiarts\Tabs\Tabs` package you need to do some extra work to make that translatable as well. It will work out of the box, but it will show all the fields instead of only the fields you need to be available for translating. Below you will find an example of you can you make sure the Tabs will only show the fields that need translating.

```php
return [
	TranslatableTabs::make($this, 'Page editor', [
		'Main' => [
			Text::make(__('Name'), 'name')->sortable()->rules(['required']),
			$this->getFlex(__('Layout'), 'layout'),
		],

		// ...
	])->withToolbar(),
];
```

## Options

### Excluding from translations
By default we set all columns to translatable except for the columns that are marked as producted by us. You have two options to change this behaviour. You can set the translatable columns manualy or you can keep the default behaviour and exclude more columns.

```php
# In this example, we have a resource with the columns:
# id, name, slug, image, created_at

/**
 * The default behaviour
 * Translatable: name, slug and image. Id and created_at are protected by default
 */

/**
 * Set the translatable columns manualy on your model.
 * Translatable: name and slug
 */
public function translatableColumns(): array
{
    return [
        'name',
		'slug',
    ];
}

/**
 * Use the default settings but exclude columns
 * Translatable: name and image
 */
public function notTranslateColumns(): array
{
    return [
	    'slug',
	];
}
```

### Marked as protected

```php
protected $protected_from_translations = [
	'id',
	'created_at',
	'updated_at',
	'deleted_at',
];
```
