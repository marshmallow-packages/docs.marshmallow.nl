---
title: Commands
nextjs:
  metadata:
    title: Commands
    description: Step by step guide how to install the Translatable package.
---

We have default routes available to use in your frontend so the user can switch there language. Use the route below to do so.


## Index missing translations

This package can keep track of missing translations. This is for your Nova Resources that have translatable enabled. To (re)index the missing translations, you can run the command below.

```bash
php artisan translatable:index-missing-translatables
```


## List and fix duplicates

It could happen that you have duplicate translations in your database. If this happens the translator might show the wrong translation or no translation at all. To check if this is happening you can run de command below. This will let you know if you have duplicates and if you have them, they can be listed in a table and can be fixed.

Please not, we don't remove any duplicates if they are in fact translated. So after fixing them it could happen that there still are duplicates left. The output of this command will let you know where the duplicates are and you can dive into your database and fix them manually.

```bash
php artisan translatable:duplicates
```

---

## Load default translations

We have presets of translations which you can use in your projects. When you run this command, we will only translate existing translation rows in your database. We won't add any new rows. This is done this way so we don't clutter your database with unnecessary data.

```bash
# The "nl" in this example is the country code in your database.
# We will check if we have a match for that, if we don't we will
# ask you to select the correct language so we know we import the
# correct data.
php artisan translatable:preset nl

# If you don't want the command to ask you any questions you
# can add the --force option. This will do the import directly.
php artisan translatable:preset nl --force
```
