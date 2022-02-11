# Life Cycle of Components
- components in Js and consequently in React follow a life cycle executing multiple tasks and going through
diferent phases of state
- following lifecycle, these components and elements get triggered upon different events transforming themeselv
and their state accordingly
- using lifecycle methods or hooks, a developer can specify how the components is going to behave freeing up
  it resources

1. mouting
2. updating
3. unmounting


# Mouting
this phase means putting elements into the DOM
React has four built-in methods that get called in this same order when component is mounting


constructor()
getDerivedStateFromProps()
render()
componentDidMount()

the render() method is only required and other are optional and will be called if you define them



constructor() - it is special function that will get called whenever a new component is created, it is mostly used
- to initilize state and binding the event handlers
- the constructor() method is called with the props as argument and you should always start by calling super()
- we should not make HTTP request in constructor


# getDerivedStateFromProps()
-this method is called right before rendering the element in the DOM
-this is the prefered place to set the state object based on the initial props
-it tales state as an argument and return an object with changes to the state

# render() method is the only method required
- this is the method responsable for output the HTML to the DOM
- do not change the state or intercat with DOM or make ajax call

# componentDidMount()
- this method is called immediately after the component is rendered
- this is the method we mosylt use when we want to run statement which required the component is ready and placed
  in the DOM
- we can intercat with DOM and make HTTP request to get data


# Updating
the next phase in the lifecycle is when a component is updated
A component is updated whenever there is a change in the components state or props
in react there are 5 built-in method that get called in order when a componnt is updated

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidMount()

# getDerivedStateFromProps()
- this method is called when a component get updated
- this is still the preferred place to set the state objet based on initial props

# ShouldComponentUpdate()
this method can return a boolean value that instruct react that it should continue with rendering or not
the default value is true

# render()
this method is called everytime when a component gets updated
to update the UI it will re-render the HTML to the DOM with new changes

# getSnapShotBeforeUpdate()
this method can access the previous value of props and state after the update
if getSnapShotBeforeUpdate() method is present you should also include componentDidUpdate() method
otherwiase you will get an error

# componentDidUpdate()
this method is called after the component is updated in the DOM







