import { $getRoot, $getSelection, $createParagraphNode, $createTextNode, createEditor } from "lexical";

// Lexical implementation for editing XML markup with overlapping tags

const config = {
    namespace: "XML Inline Editor",
    theme: {},
    onError: console.error
};

const editor = createEditor(config);

const contentEditableElement = document.getElementById('xmlEditor');

editor.setRootElement(contentEditableElement);

editor.update(() => {
    const root = $getRoot();

    const selection = $getSelection();

    const paragraphNode = $createParagraphNode();

    const textNode = $createTextNode("Hwaet world");

    paragraphNode.append(textNode);

    root.append(paragraphNode);
});