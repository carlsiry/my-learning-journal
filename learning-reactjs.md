## Learning React

## What is React?

A JavaScript library for user interfaces.

- Declarative: more predictable, easier to debug
- Component-Based: manage state, out of the DOM

## JSX and JS in React

- JSX: XML-like syntax

```
class HelloMessage extends React.component {
    render() {
        return <div>Hello {this.props.name} </div>
    }
}

React.render(<HelloMessage name="Carson" />, mountNode);
```

- JS: React compiled JS

```
class HelloMessage extends React.component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

React.render(React.createElement(HelloMessage, {name: "Carson"}), mountNode);
```
