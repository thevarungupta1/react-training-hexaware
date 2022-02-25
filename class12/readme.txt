# State Management

- props
- Context API
- Redux - state management library


# Context API
- context provides a way to pass data through the component tree without having to pass props down
manually at every level

- In React, we passed data in top-down approach vie props, it is difficult sometime for certail type
of props that may required in multiple components

- context provides a simple way to pass data between component without passing explicity
thright every level of the component tree


# How to use context
there are two main steps to use react context into the application

1. setup a context providers and define the data which you want to store
2. use a context consumer whenever you need the data from the store

In React, context API is used to allow sharing data accross all levels of the application
it aim to solve the issue of prop drilling

React.createCoontext
Context.provider
context.consume
class.contextType



