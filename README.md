# Detailer

A plugin for WordPress that creates a custom Gutenberg block called Book Details. It’s a companion setup for a two-part tutorial on creating custom dynamic Gutenberg blocks for Wordpress.

- [Create Your Own Dynamic Gutenberg Block for Wordpress, Part 1](https://davidyeiser.com/tutorials/wordpress-create-dynamic-gutenberg-block)
- [Create Your Own Dynamic Gutenberg Block for Wordpress, Part 2](https://davidyeiser.com/tutorials/wordpress-dynamic-gutenberg-block-code-snippets)

## Credit

The structure and setup of this repository is taken from [@zgordon/how-to-gutenberg-plugin](https://github.com/zgordon/how-to-gutenberg-plugin). All credit for its cleverness goes to Zac Gordon. Blame for any errors goes to me.

## Setup

Place this project directory in `wp-content/plugins` and then, in the `wp-content/plugins/detailer` directory, run:

```
yarn
```

To build the files **for development** run:

```
yarn dev
```

To build the files **for production** run:

```
yarn build
```

The tutorial linked above goes into much more detail on how to set up the plugin and walks through writing the code for the custom Gutenberg block. If you experience any problems or have any questions please file an issue.
