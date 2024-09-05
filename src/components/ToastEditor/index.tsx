import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import color from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/toastui-editor.css';
// 글자색
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// 한국어 설정
import '@toast-ui/editor/dist/i18n/ko-kr';
import ToastEditorStyled from './styled';

interface ToastEditorProps {
    editorRef: React.RefObject<Editor>;
    setHtmlValue: React.Dispatch<React.SetStateAction<string>>;
    setMarkDownValue: React.Dispatch<React.SetStateAction<string>>;
    // setHtmlValue: () => void;
    // setMarkDownValue: () => void;
    // onClickWritePost: () => void;
}
const ToastEditor = ({ editorRef, setMarkDownValue, setHtmlValue }: ToastEditorProps) => {
    // 버튼을 2번 눌렀을 때 전송되는거 확인해보기
    const onClickWritePost = useCallback(() => {
        if (editorRef?.current) {
            // console.log('Editor instance:', editorRef.current);
            const instance = editorRef.current.getInstance();
            // console.log('Instance:', instance);
            const markdown = instance.getMarkdown();
            const html = instance.getHTML();
            // console.log('markdown', markdown);
            // console.log('html', html);
            setMarkDownValue(markdown)
            setHtmlValue(html)
        } else {
            console.error('Editor reference is not set');
        }
    }, [editorRef]);

    useEffect(() => {
        if (editorRef?.current) {
            const instance = editorRef.current.getInstance();
            instance.addHook('load', () => {
                console.log('Editor loaded');
            });
        }
    }, [editorRef]);
    return (
        <>
            <ToastEditorStyled>
                <div className="postBox">
                    {/* <Viewer initialValue={inputValue}/> */}
                    <Editor
                        ref={editorRef}
                        initialValue=" "
                        placeholder="글을 작성해 주세요!"
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={false}
                        hideModeSwitch={true}
                        // 글자색 변경이 왜 안되는거야
                        plugins={[color]}
                    />
                    <div className="btnBox">
                        <div
                            className="postBtn"
                            onClick={() => {
                                console.log('btn click!!!!');
                                onClickWritePost();
                            }}
                        >
                            작성
                        </div>
                    </div>
                </div>
            </ToastEditorStyled>
        </>
    );
};
export default ToastEditor;
