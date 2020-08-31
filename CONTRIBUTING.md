# Contributing

## Improving existing plays

A great way to start contributing is to extend (or correct) the existing plays with additional examples or information.

You can do so by either cloning the repository, and [developing locally](#development), or by editing markdown directly in GitHub. Every page has a edit button for this purpose:

![image](https://user-images.githubusercontent.com/23662329/88210127-5dbdd180-cc5c-11ea-80fa-b814a4adc782.png)

## Propose new plays

> Before submitting a new issue, make sure to look at the issues board to see if a similar one already exists.
> Also, there's a list of plays to work on outlined in [#17](https://github.com/raunofreiberg/ui-playbook/issues/17).

If you believe that there's a component missing from UI Playbook, feel free to submit a proposal for a new one.
Don't worry if the proposal isn't perfect — we can work out the details in collaboration! The idea is to submit a draft that could be iterated upon.

You can do so by submitting a new issue and following the issue template, which aims to cover the following key points:

- Component name, with visual, and concise description
- Functionality (describe how the component should behave)
- Best practices (cover principles, pitfalls, intricacies or any other non-obvious things to keep in mind)
- Implementation (a bit more technical than the previous chapters, possibly get into framework-specific nuances)
- Examples (render a few well implemented examples of the component from various design systems)
- Accessibility (cover relevant accessibility requirements and links to WAI-ARIA docs for the component design pattern, if applicable)
- Resources (any resources used to put the play together)

## Development

Install the dependencies:

`yarn` or `npm install`

Run locally:

`yarn dev` or `npm run dev`

Build production:

`yarn build` or `npm run build`
