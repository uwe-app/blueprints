+++
created = 2020-12-20
description = "Writing new posts"

[taxonomies]
tags = ["Create"]
+++

{{import "header"}}

To add a new post to the blog create a Markdown file with a `.md` extension to the `posts` folder.

## Define meta data in the front matter

```toml
+++
created = 2020-01-20
title = "Post title"
description = "Brief description of the post"

[taxonomies]
tags = ["Tags", "List"]
+++
```

## Import the page header for all posts

```handlebars
\{{import "header"}}
```

## Create the post content

```markdown
Content for your blog post goes in between the *header* and *footer* imports.
```

## Import the page footer for all posts

```handlebars
\{{import "footer"}}
```

{{import "footer"}}
