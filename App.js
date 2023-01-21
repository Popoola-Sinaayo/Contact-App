import React, { useEffect, useState } from "react";
import Main from "./Main";
import Context from "./Auth/context";

export default function App() {
  return (
    <Context>
      <Main />
    </Context>
  );
}
