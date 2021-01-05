+++
created = 2020-12-19
description = "Set the default author"

[taxonomies]
tags = ["Author"]
+++

{{import "header"}}

To set the default author for the blog edit the settings in the `site.toml` file.

The default author is anonymous:

```toml
[authors.anonymous]
name = "Anonymous"
url = "https://example.com"
```

Replace it with your information, for example:

```toml
[authors.tmpfs]
name = "Muji"
url = "https://tmpfs.org"
```

Then update the default author for all pages. In the `[page]` section find the `authors` list and replace `anonymous` with the alias you used, for example:

```toml
[page]
authors = ["tmpfs"]
```

{{import "footer"}}
