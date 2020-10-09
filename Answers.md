1. What problem does the context API help solve?
-Context API solves the problem for having to use prop drilling pattern to pass props in the component tree. Instead, with context API we can have a central store (context object) that can store and pass our data without having to prop drill from component to component.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 -Actions are objects with a required type property that explains what interaction just happened which are triggered when an event occurs in an app which is then dispatched to the reducer in order to inform us what type of action occured and possibly what data change is passed with the payload property.

 -Reducer is a pure function that can help us to manage our state taking in our current state, and action as arguments, and return a new, updated state object based on these arguments.

 -Store in Redux is an object used to maintain application's state data and make it globally accessible throughtout our component tree to whatever component may need it in order to render it to the UI. It's also called the single source of truth because it's the only place where state data can be exchanged in order to make changes in our UI by our reducer, which is informed by the action that was dispatched by an event that happened in the UI. 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
-Application state is used state that is available thoughout the whole application and component state is data that is available just in particular component. When data is needed by multiple component it would be convenient and efficient to use application state otherwise the component state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 -Redux thunk is a function that returns another function also known as the middleware function which is mostly used for promises like asynchronous calls to an API/server.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
 -My favorite are both Redux and Context API because both of them have very essential use cases, in the case of Redux, it makes a great performance with state management without any caveats. And Context API is also great but with just once downside that it makes component reuse harder.
