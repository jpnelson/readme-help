# README help
<section id="readme-help" intro="Welcome to readme-help! What would you like help with?" prompt="I'd like help with...">


## What is it?
This tool will turn your README markdown file into an interactive prompt.

This is useful for providing help, and for breaking down large readmes into smaller pages.

## Setup

Wrap the section of your README that you want to be your interactive help with a section that has the following id `readme-help`:

```md
    # Readme
    <section
        id="readme-help"
        intro="Welcome to our repo!"
        prompt="I'd like help with..."
        level="2"
    >

    ## Setup
    ...

    ## Contributing
    ...

    ## Contact
    ...
    </section>
```

## Arguments

Arguments are specified through attributes on the section element.

- id: always `readme-help`
- intro: the text to display before the prompt
- prompt: the text to display at the prompt
- level: the heading level you wish to make sections in the prompt (defaults to 2)

## Heading levels

By default the heading levels listed is 2 – any deeper headings will be prefixed with hashes. For example,

### Sub sections

This section should appear as "# Sub section" in the prompt

# Higher heading levels

If you specified the heading level as 2, higher heading levels (like this one) will not be recognised in the grouping.

</section>

## Demo
This README itself is a demo! Check out this repo and run `npm run help`.
Note: this section will *not* appear in the help, as it is outside the section.