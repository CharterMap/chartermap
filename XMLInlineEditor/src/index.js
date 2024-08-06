import { createEditor } from "lexical";

// Lexical implementation for editing XML markup with overlapping tags

const config = {
    namespace: "XML Inline Editor",
    theme: {},
    onError: console.error
};

const editor = createEditor(config);

const contentEditableElement = document.getElementById("xmlEditor");

editor.setRootElement(contentEditableElement);

document.getElementById("Test").innerHTML += `<h3> Test </h3>`