import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const editorContainer = useRef();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const markdownEditor = new Editor({
      el: editorContainer.current,
      hideModeSwitch: true,
    });

    markdownEditor.addHook('change', () => {
      const currentContent = markdownEditor.getMarkdown();
      onContentChange(currentContent);
    });

    return () => {
      markdownEditor.destroy();
    };
  }, [onContentChange]);

  return <div ref={editorContainer} />;
  // END
  
};

export default MarkdownEditor;
