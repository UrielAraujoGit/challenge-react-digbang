# Challenge Digbang - React

This repository is an implementation of the [Digbang React challenge](https://github.com/digbang/ejercicio-react)

for this challenge I used the following technologies:

- [ReactJS](https://es.react.dev/) as a tool for the creation of the user interface
- [Typescript](https://www.typescriptlang.org/) as a developer tool for enhance javascript developer experience
- [rc-slider](https://github.com/react-component/slider) as a library that exposes a slider component
- [TailwindCss](https://tailwindcss.com/) I chose Tailwind CSS because it's a tool that allows working with CSS in an organized, efficient manner, and it's easily extensible.
- [ViteJS](https://vitejs.dev/) as the JavaScript bundler

## How to run this challenge ?

### Clone this repository

git clone https://github.com/UrielAraujoGit/challenge-react-digbang.git

### Navigate to project directory

cd challenge-react-digban

### Install dependencies

- [npm](https://docs.npmjs.com/)

```bash
  npm install

```

### Development Setup

```bash
  npm run dev
```

### Prerequisites

- Install [Node.js](https://nodejs.org/en) which includes [Node Package Manager](https://www.npmjs.com/)

# Developer Notes

I would like to mention some of the choices regarding this project.

### Keep it simple:

Due to the fact that this project is a short technical challenge, I decided that the best approach for the structure, as well as the logic, will be to keep it as simple as possible. That way, it would be easy to debug, test, and understand.

```bash
App
|-- CreditContainer
|   |-- CreditSlider (monto total)
|        |-- input (number)
|        |-- slider
|   |-- CreditSlider (plazo)
|        |-- input (number)
|        |-- slider
|-- ModalContainer
|   |-- ModalCredit
|   |-- ModalPaymentDetails

```

- Components: There is a main (`app.tsx`) component, where the content as well as the "modals" will be presented. There is no context or global state; all the state is handled with local `useState`. All the events are handled with simple functions, and the communication between parent and child components is handled by functions as props.

- Modals: There is a simple but effective (`modal-container.tsx`) component, which receives children and displays them. This modal-container component also receives a function as a prop that will be executed when the "close" button is pressed.

### Let's talk about performance:

There are some improvements that could be implemented if the performance of the project starts to raise some concerns.

- Memoize function props: It's possible to avoid some extra re-renders by memoizing the handler functions passed as props. That way, React could understand that it will be only necessary to re-render the components when the component state changes.

- Use `rc-slider` in a more efficient way: The component exposed by the "rc-slider" library has a few events that we can use to update the selected value. Those events are "onChange" and "onChangeComplete".
  - onChange: This event is triggered constantly as the user moves the slider to select the desired value (`onChange`). This could be used to give the user a feel that the application is more responsive with immediate feedback, but it's also expensive due to the fact that the data will need to be recalculated constantly.
  - OnChangeComplete: This event is triggered only when `ontouchend` or `onmouseup` events are triggered. This could be used to calculate the new data and update the UI in a very efficient way, but it could also make the app feel less responsive.
