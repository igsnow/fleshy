import { writable } from "svelte/store";

export interface Todo {
    done: boolean;
    text: string;
}

const todo: Todo[] = [
    { done: true, text: "test-1" },
    { done: false, text: "test-2" },
];

export const list_store = writable(todo);
