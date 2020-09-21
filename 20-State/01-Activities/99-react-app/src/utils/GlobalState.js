import React, { createContext, useReducer, useRef } from "react";

const CountContext = createContext();
const { Provider } = CountContext;

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, {
                id: state.length * Math.random(),
                name: action.name
            }];
        case "remove":
            return state.filter ((_, index) => {
                return index !==action.index;
            })
        case "prioritize":
            return state.map
        default:
            return state;
    }
}

const [items, dispatch] = useReducer(reducer, []);

const ToDoProvider 

const useToDoContext

export {ToDoProvider, useToDoContext}