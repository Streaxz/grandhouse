"use client";
// You can use this code in a separate component that's imported in your pages.
import type { CodeBlockEditorDescriptor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React from "react";
import {
  MDXEditor,
  codeBlockPlugin,
  headingsPlugin,
  listsPlugin,
  linkPlugin,
  quotePlugin,
  markdownShortcutPlugin,
  useCodeBlockEditorContext,
  toolbarPlugin,
} from "@mdxeditor/editor";

const PlainTextCodeEditorDescriptor: CodeBlockEditorDescriptor = {
  match: () => true,
  priority: 0,
  Editor: (props) => {
    const cb = useCodeBlockEditorContext();
    return (
      <div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
        <textarea
          rows={3}
          cols={20}
          defaultValue={props.code}
          onChange={(e) => cb.setCode(e.target.value)}
        />
      </div>
    );
  },
};

const Editor = () => {
  return (
    <MDXEditor
      markdown={"Hello world!"}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => {
            return <>toolbar components</>;
          },
        }),
        codeBlockPlugin({
          codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor],
        }),
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
      ]}
    />
  );
};

export default Editor;
