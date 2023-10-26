import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./ui-components";
import { Flex } from "@aws-amplify/ui-react";

import "./App.css";

// Website layout wrapper
const App = () => {
  return (
    <Flex direction="column" gap="xxxl" alignItems="center">
      {/* <div style={{ position: "fixed", zIndex: "1" }}> */}
      <Navbar gap={0} width={"100%"} />
      {/* </div> */}
      <div className="content-container">
        <Flex gap="xxxl" direction="column">
          <Outlet />
          <Footer />
        </Flex>
      </div>
    </Flex>
  );
};

export default App;
