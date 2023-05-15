import React from "react";

import { Button } from "@mui/material";
import handleUpload from "../../firebase/handle-upload";
import handleDelete from "../../firebase/handle-delete";

const FileUploader = ({
    firebaseFolderName,
    setPreviewUrl,
    setCurrentFile
}) => {
    const [fileUpload, setFileUpload] = React.useState(null);
    const [progress, onProgress] = React.useState(0);
    const [success, onSuccess] = React.useState(false);
    const uploadImage = async () => {
        // console.log("RUN TO CLICK EVENT", options);
        await handleUpload({
            file: fileUpload,
            // setPercent: setPercent,
            firebaseFolderName: firebaseFolderName,
            onProgress: onProgress,
            onSuccess: onSuccess,
            setCurrentFile: setCurrentFile,
        });
    };

    React.useEffect(() => {
        uploadImage();
    }, [fileUpload]);

    return (
        <>
            <div className="mb-3">
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full m-3 h-[100px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10  mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Bấm để tải </span> hoặc kéo thả ảnh</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" onChange={(e) => {
                            const file = e.target.files[0];
                            setFileUpload(file);
                            const reader = new FileReader();
                            reader.onload = () => {
                                setPreviewUrl(reader.result);
                            };
                            reader.readAsDataURL(file);
                           
                        }} />
                    </label>
                </div>
            </div>
        </>
    );
};

export default React.memo(FileUploader);
