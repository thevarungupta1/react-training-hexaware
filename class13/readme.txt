# Redux
- REdux is a javascript based library used for state management

State = Data

- the idea is to maintain the data centrally / globally which can be accessed by any component irrespective
of the position and order of the component otherwise we have to pass data to each and every component in the
component tree

- misconception: redux is not a part of react library it can use with any project which is using javascript

# Redux Architecture
It consist of three main component
1. store
2. action
3. reducer

# Store: a place where an entire state of the application is listed managing the status of the application at a given
point of time

# action: A pure object contained with in store having the information about the user event, the action is send from
the react biew to be ready by reducer

# Reducer: reducer is a pure function able to read the payload from the action and then execute updating the store