import React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';
import "./components/index.css";


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
