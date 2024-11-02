import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.error(err);

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 font-poppins p-5 text-center">
            <h1 className="text-6xl text-[#fc8019] mb-2">Oops !!!</h1>
            <h1 className="text-4xl text-gray-800 mb-5">Something went wrong</h1>
            <h2 className="text-3xl text-gray-500">{err.status} : {err.statusText}</h2>
        </div>
    );
};

export default Error;
