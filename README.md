# Redux Quiz

This quiz is designed to test your familiarity with basic Redux 
state managment. You **must** use redux and **not** React's built in `state` and `setState`.

## Rules

1. Use standard lab process: fork this repo and clone locally.
1. **Make an initial commit when you start your work**
1. You have **55 minutes** to complete what you can.
1. You must complete this work on your own within the allotted time
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and push your commits frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Working webpack react build system is included (**remember to `npm i` after cloning your forked repo!**)
1. Use general best practices and common sense
    * Highly recommended to implement what is needed, no more no less
    * Blind boilerplate or copying in code will not be helpful and will likely create more work
    * **Focus effort on requirements of the lab**
1. Total possible points are 70. You will be graded out of 50 points

## Submission requirement

* **Do a fork and PR like a normal lab**
* **Read the requirements more than once, it will save you a ton of time**

## Base Requirements

Build an app that displays a name tag based on greeting and name input controls

* You will need to setup redux, starter lab only has `App.js`
* You _must_ follow the technical requirements and specifications below

## Components

* App
    * Connect(Controls)
        * Controls
    * Connect(Display)
        * Display

### Details

* `Controls` has two `input`s, one for greeting
and one for name
* `Display` combines the greeting and name into something
like a name tag:

```
|       Hello       |  
|     stranger      |
```

### Testing

Unit test reducers and actions!

### Reducers

* `greeting` - the greeting, defaults to "Hello"
* `name` - the name, defaults to ""

### Actions

* `GREETING_CHANGE` update greeting to `payload`
* `NAME_CHANGE` update name to `payload`

### Action Creators

* `changeGreeting` creates action to change greeting
* `changeName` creates action to change name
