# Milkyway

Universe styles as a Semantic-UI theme.

## What is this?

This repo is an ongoing Milkyway implementation using [Semantic UI](https://semantic-ui.com/), to be used with this framework's [official react integration](https://react.semantic-ui.com/).

## Usage

### Install

```
#yarn
nvm exec yarn add semantic-ui-react@0.85.0

#npm
nvm exec npm install --save semantic-ui-react@0.85.0
```

Then:

```
#yarn
nvm exec yarn add git+ssh://git@github.com/uniiverse/milkyway.git#vx.x.x

#npm
nvm exec npm install --save git+ssh://git@github.com/uniiverse/milkyway.git#vx.x.x
```

Just replace the `x.x.x` notation with your target version.

### Integrate

You can checkout the `sample` folder for a working installation, but it's really nothing more than importing the css and use the components.

```javascript
import React, { Component } from 'react';

// We use components from semantic-ui-react...
import { Button, Container } from 'semantic-ui-react';
//... and we style them with our theme!
import 'milkyway/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid >
          <Button primary>I am a Milkyway Button!</Button>
        </Container>
      </div>
    );
  }
}

export default App;
```

## Contributing

Contributions are more than welcome: every step counts in having a unified UI for our users.

### Basics
First thing, read the [semantic docs](https://semantic-ui.com/introduction/getting-started.html), but specifically the [theming one](https://semantic-ui.com/usage/theming.html), which can explain about file hierarchy, css overrides and relevant examples.


### Project structure

Here's a look at some interesting folders and files in these repo:

```
milkyway/
├── semantic/
│   └── src/
│       ├── definitions/
│       └── themes/
│           └── universe/
│               ├── assets
│               ├── collections
│               ├── elements
│               ├── globals
│               │   ├── site.overrides
│               │   └── site.variables
│               ├── modules
│               └── views
├── stories/
├── sample/
│
└── semantic.json
```
- **semantic.json**: contains setup for this semantic install, including which component to include in the final build.


- **semantic/**: full semantic ui framework install
- **semantic/src/theme.config**: choose which theme to apply to components. *REMEMBER TO EDIT THIS FILE WHEN STYLING A NEW COMPONENT!*


- **semantic/src/themes/universe**: our main code folder. Place your styles here, placing and naming your files as you find them in the default theme directory.
- **semantic/src/themes/universe/globals/site.***: these files contain global less variables, such as color codes, sizes and default values. Check them first!


- **stories/**: use storybook to provide samples, for fast prototyping, ui/ux testing and development. Always add relevant stories for new styles and components.

- **sample/**: a basic create-react-app to demonstrate how an integration with this project works.

### Development

Find an element to style by locating the `.less` file within Semantic's `definitions` folder.
- Create a `component.variables` and `component.overrides` file within the right component type folder.
- Edit the `theme.config` file to instruct semantic to use the universe version of that component.
- Write a new story and use it to see how your style is going!


### Release

Once you have your code in the master branch, stop your build system and storybook processes, git stash to clean your working directory, then simply run:

```
#yarn
nvm exec yarn version --new-version x.x.x
#npm
nvm exec npm version x.x.x
```

Make sure to follow [semantic versioning](https://semver.org/).

## Roadmap

This is still an ongoing effort, and there are many questions still unanswered.

The best way to move forward is to have as many components correctly styled in the smallest time frame possible.

A quick look at the `semantic/src/theme.config` file can give you a list of components that have at least some styling and the ones that are still default.

Here's some of the basic components and the progress so far:

- [ ] [Move our build system to webpack](https://medium.com/webmonkeys/webpack-2-semantic-ui-theming-a216ddf60daf)
- [ ] Buttons
  - [x] Primary
  - [x] Primary inverted
  - [x] Secondary
  - [ ] Secondary inverted
  - [x] Tertiary
  - [ ] Groups
  - [ ] Sizes (tiny, medium, massive...)
  - [ ] Mobile
- [x] Card
- [x] Checkbox
  - [ ] Toggle
- [x] Container / Layout
- [x] Dropdown
  - [x] Default
  - [x] Images
  - [x] Search
  - [x] Multiple
- [x] Form
- [x] Grid
- [x] Header
- [x] Icon (still need an automated font generation process)
- [x] Input
- [ ] Menu / Navbar
- [ ] Modal
- [ ] Pagination
- [ ] Progress
  - [x] Success
- [x] Search
- [x] Segment (Placeholders)
- [x] Step
