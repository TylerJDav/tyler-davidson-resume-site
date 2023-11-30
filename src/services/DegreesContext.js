import { createContext } from "react";

import AppViewModel from "./appViewModel.meta";

let api = AppViewModel.getApi("degrees");
let viewModel = AppViewModel.entities["degrees"];

export const DegreesContext = createContext({ api: api, viewModel: viewModel });
