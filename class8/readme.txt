# React forms
- forms are essential part of any application as it allows uset to interact with your application
- forms can be use to take information from the user
- forms can contain different type of elements to take different type of data
- forms can execute multiple tasks dependening upon the nature of the application
- forms can contain textbox, dropdown, radiobutton, checkbox etc

# Creating forms
- react provides a stateful and fairly reactive approach to create, design and build a form
- instead of a DOM element, its the component that handle the React form
- there are primarly two kind of form input in react
1. uncontrolled component
2. controlled component

# Controlled component
- the input form element is handled by the component itself with mutable state being kept in the state property
and is only updated using setState() method
- function mediate the data passing into them on every onChange event instead of having the data only once
- this passed data is saved to the state and update using setState() method enabling the component to gain better
control over form elements
- form element like <input> and <button> in html generally maintain their own state