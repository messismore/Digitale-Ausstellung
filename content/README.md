# CONTENT

All works are stored in Markdown and placed in this folder. They will be indexed automatically.

## Structure

All files should adhere to the following structure:

```markdown
---
author: First Name Surname
title: Title of the Work in Title Case
kind: Master Thesis
term: [Winter 202X | Summer 202X]
date: YYYY-MM-DD (date the work was presented)
advisors:
  - Advisor 1
  - Advisor 2
  - Advisor 3
topics:
  - topic 1
  - topic 2
  - topic 3
teaser: One or two sentences that briefly describe the project.
image: path-to-cover-image.jpg
---

# Title of the Work in Title Case

…
```

Read more about writing Markdown [here.](https://content.nuxtjs.org/writing#headings)

## HTML and Vue

We can also use standard HTML and even Vue components in our Markdown files:

```markdown
## HTML

<p><span class="note">A mix of <em>Markdown</em> and <em>HTML</em>.</span></p>

## Vue

<a-vue-component :someProp="['foo', 'bar', 'baz']"></a-vue-component>
```

## Layout and Styling

For more control over our layout, we can position elements according to a 5-column CSS grid. We achieve this with utility classes modelled after Tailwind CSS. https://tailwindcss.com/docs/grid-column

```markdown
<div class="col-start-1 col-end-3"><img src="/works/Beermann-To-Make-It-Home/image-001-pacific-homes-logo.png"></img></div>
<p class="col-start-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra purus mollis, lobortis urna et, maximus purus. Praesent ac ipsum gravida, aliquet ipsum ut, convallis risus. Sed eu ullamcorper erat. Nullam in ipsum fermentum, pulvinar velit nec, ultricies nulla. Nam finibus orci pulvinar, porta urna at, dignissim arcu.</p>
```

![Resulting layout](/static/source/layout-example-1.svg)

## Example Layout

![A possible layout](/static/source/layout-example-2.svg)
