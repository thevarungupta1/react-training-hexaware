# Updating
the next phase in the lifecycle is when a component is updated
A component is updated whenever there is a change in the components state or props
in react there are 5 built-in method that get called in order when a componnt is updated

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()


# Unmounting
the next phase in the lifecycle is when a component is removed from the DOM
in react there s only one-built in method that get called when a component is unmounted
- componentWillUnmount()

this method is called when the component is about to be removed from the DOM

# Error Boundaries
- React components catching JS errors occuring anywhere in the component tree of their child
- these componentsd log those errors and display a fallback user interface rather than displaying the crashed component
  tree


# How to implement error boundaries
1: create a class which extemds React component and passes the props inside it
2. now add componentDidCatch() method which allows you to catch error in the components below the tree
3. next add render() method which is responsable for how the component should be renedred
4. now we can use it as regular component. add the new component in html which you want to include in the EB
