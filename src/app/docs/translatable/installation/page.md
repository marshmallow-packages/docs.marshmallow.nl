---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Step by step guide how to install the Translatable package.
---

Step by step guide on how to install the Translatable package, ensuring that you have all the necessary prerequisites and configurations in place. This comprehensive guide will walk you through each stage of the installation process, providing detailed instructions and troubleshooting tips to help you successfully integrate the Translatable package into your project.

---

## Composer

Run the composer command that is shown below to install this package in to your Laravel project.

```bash
composer require marshmallow/translatable
```

---

## Publish vendor files

By running the command below, the configuration file for this package will be published. It is recommended to publish this file as there may be some settings you want to update.

```bash
php artisan vendor:publish --provider Marshmallow\\Translatable\\ServiceProvider
```

---

## Migrate

Now that the package is installed, we need to run the migrations that will create the tables where we store the single line translations, the resource translations and keep track of the missing translations.

```bash
php artisan migrate
```

---

## Install the package

After you've completed the previous steps we can now run the installer. The installer will seed the database with the translations and languages.

```bash
php artisan translatable:install
```

---

## Notice

There are some minor things to keep in mind when using this package. Please check them out below to ensure a smooth integration and avoid common pitfalls. These considerations will help you make the most out of the Translatable package and ensure that your project runs efficiently and effectively.

{% callout type="warning" title="Database setting" %}
Because of group by's in queries you probably need to change your database strict to false. If you get database errors during the installation, this is probebly the issue.
{% /callout %}

{% callout type="warning" title="Adding a new language" %}
When you add a new language, don't forget the run `translatable:sync-missing` so the database is seeded with this new language.
{% /callout %}
