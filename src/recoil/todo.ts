import { atom } from "recoil";

export interface IToDoTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
}

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

export const todoState = atom<IToDoTypes[]>({
  key: "todos",
  default: [
    { id: 1, contents: "To Do List section 1", isCompleted: false },
    { id: 2, contents: "To Do List section 2", isCompleted: false },
    { id: 3, contents: "To Do List section 3", isCompleted: false },
  ],
});
