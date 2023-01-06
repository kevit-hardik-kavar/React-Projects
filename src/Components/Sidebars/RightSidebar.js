import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <p>Fast Track ⏱️</p>
      <p>Docusaurus: Documentation Made Easy</p>
      <p>Migrating from v1</p>
      <p>Features</p>
      <p>Design Principle</p>
      <p>Comparison with other tools</p>
      <div className="inner-tag">
        <p>Gatsby</p>
        <p>Next.js</p>
        <p>VuePress</p>
        <p>MkDocs</p>
        <p>Docsify</p>
        <p>GitBook</p>
        <p>Jeky||</p>
      </div>
      <p>Staying informed</p>
      <p>Something missing?</p>
    </div>
  );
}

export default RightSidebar;
