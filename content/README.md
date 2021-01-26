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
## Heading

<div class="col-start-1 col-end-3">Proin consectetur viverra molestie. Cras quis risus eu tortor fermentum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur congue erat eget porta rhoncus. Aenean sodales mauris leo. Suspendisse eget tellus laoreet, pulvinar libero at, luctus felis. Donec non sollicitudin tellus, eget molestie erat. Mauris nec mauris at risus sodales ultrices at eget nisi. In a dapibus justo. Nam et tempus quam. Aenean non lacus auctor ex mattis consequat sed sed ex. Sed porttitor nec nisl id porttitor.</div>
<div class="col-start-3 col-end-6"><img src="/works/First-Name-Surname-Title-of-the-Work/image-2-boullée.jpg"></img>Pellentesque nisl ante.</div>
```

![Resulting layout](/static/source/layout-example-1.png)

## Example Layout

![A possible layout](/static/source/layout-example-2.png)
