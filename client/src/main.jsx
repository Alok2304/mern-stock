import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store , persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById("root")).render(
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<App />
		</Provider>
	</PersistGate>
);
