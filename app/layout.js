import Nav from "@components/Nav";
import "@styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default Rootlayout;
