import { createContext } from "react";

import AppViewModel from "./appViewModel.meta";

let api = AppViewModel.getApi("jobs");
let viewModel = AppViewModel.entities["jobs"];

export const JobsContext = createContext({ api: api, viewModel: viewModel });
