import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('xml-inline-editor', {
    text: 'xml-inline-editor button',
    onAction: () => {
      editor.setContent('<p>content added from xml-inline-editor</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('xml-inline-editor', setup);
};
