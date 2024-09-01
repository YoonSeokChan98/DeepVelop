import { useRouter } from 'next/router';

const DeepVelop = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <div>
                <div>hi///{id}</div>
            </div>
        </>
    );
};

export default DeepVelop;
