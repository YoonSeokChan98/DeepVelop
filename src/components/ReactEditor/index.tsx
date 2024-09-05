import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactEditorStyled from './styled';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ReactEditor = () => {
    const modules = {
        toolbar: {
            container: [
                ['image'], 
                [{ header: [1, 2, 3, 4, 5, false] }], 
                ['bold', 'underline'],
            ],
        },
    };
    return (
        <ReactEditorStyled>
            <ReactQuill modules={modules} />
        </ReactEditorStyled>
    );
};

export default ReactEditor;
