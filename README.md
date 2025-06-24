# This Project Includes React js Hooks concepts:

 1. useState:

 - useState using primitive data type.
 - useStaet using non primitive data type (object).
 - useStaet using non primitive data type (array).

2. useReducer: 

- useReducer using Simple State and Action.
- useReducer using Complex State and Action(state as a object).
- useReducer using Complex State and Action(action as a object).
- useReducer example of how data fetching will look like without useReducer for managing multiple state.
- useReducer for data fetching and managing multiple states.
- useReducer using multiple times to manage same things like toggle button or multiple counter.
- useReducer with useContext to share state and dispatch function across the children.

3. useEffect: 

- useEffect to invoke function or command on evey change.
- useEffect to cainvokell function or command on change in dependancy.
- useEffect example of how dependancy work in useEffect.
- useEffect to invoke function or command only once after component initialization (like componentDidMount()).
- useEffect to data fetch on only once after component initialization (like componentDidMount()).
- useEffect to data fetch using dependancy (like id as dependancy).
- useEffect to data fetch on click (clickEvent as dependancy).
- useEffect to conditionally invoke function or command (on dependancy change).
- useEffect to conditionally invoke function or command and clean up before component unmounts from dom (on dependancy change invoke some command or function and on component unmout invoke some command or function just like componentWillUnmount()).


4. useCallback: 

- useCallback to cache function to stop unwanted re-rendering of child (re-cache function on dependancy change like caching function (until dependancy change) that passdown the children).

5. useMemo:

- useMemo to store cached object or function return value or endValue. (re-cache value on dependancy change like caching getter function value until dependancy change)

6. useContext:

- useContext to Consume single or multiple context easily.

7. useRef:

- useRef to get reference of some html element (like getting reference to an input and getting focus on componentDidMount() usign effect).
- useRef example of how clear timeout is done using state in the class component without using useRef.
- useRef example of how clear timeout is done using useRef in the functional component.

8. customHook:

- custom counter hook using useReducer to share countState and dispatch method.
- custom input hook using useState to bind value and reset value of input.
- custom title hook using useEffect to change title on dependancy change.