# React Redux Higher Order Components
Based on Stephen Grider's "Advanced React and Redux" course.

```
> git clone https://github.com/zitongliu/react-redux-higher-order-components.git
> cd react-redux-higher-order-components
> npm install
> npm start
```


## What is a higher order component?
A higher order component is a React component that adds additional functionality or behaviour to a existing "normal" component we've already written.

Normal component + higher order component = "enhanced" or "composed" component.

HOC are commonly used with third party libraries such as React Redux.


## Provider and connect
connect is a higher order component that is specifically made to make communication with the Provider at the top of our application. The Provider wraps the redux store. It holds the redux store and watches it closely. Whenever the store changes, the Provider takes notice and broadcast down to any connected component - 'Here is the new state'.
