// import ToastEditor from '@/components/ToastEditor';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import MyBlogStyled from './styled';
import { Editor } from '@toast-ui/react-editor';
// import ToastEditor from '@/components/ToastEditor';

// toasteditor 에서 ssr을 지원하지 않아서 아래 처럼 해줘야함
const ToastEditor = dynamic(() => import('@/components/ToastEditor'), {
    ssr: false,
});

const MyBlog = () => {
    const [markDownValue, setMarkDownValue] = useState<string>('');
    // console.log('markDownValue', markDownValue);
    const [htmlValue, setHtmlValue] = useState<string>('');
    // console.log('htmlValue', htmlValue);
    const [type, setType] = useState(false);
    const editorRef = useRef<Editor>(null);

    const WritePostOnOff = () => {
        setType(!type);
    };

    const writePostPage = type ? (
        <>
            <ToastEditor editorRef={editorRef} setMarkDownValue={setMarkDownValue} setHtmlValue={setHtmlValue} />
        </>
    ) : (
        <></>
    );

    const writeText = type ? (
        <>
            <div className="writeBtn" onClick={WritePostOnOff}>
                my blog 돌아가기
            </div>
        </>
    ) : (
        <>
            <div className="writeBtn" onClick={WritePostOnOff}>
                글작성하러가기
            </div>
        </>
    );

    return (
        <>
            <MyBlogStyled>
                <div className="myBlogWrap">
                    <div className="postBox">
                        <div>{writePostPage}</div>
                        <div className="writeBtnBox">{writeText}</div>
                    </div>
                </div>
            </MyBlogStyled>
        </>
    );
};
export default MyBlog;
