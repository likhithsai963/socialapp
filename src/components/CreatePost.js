import { useState } from "react";
import { useDispatch } from "react-redux";

const CreatePost = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState("");
    const [media, setMedia] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    return (
        <>
            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4 mt-6">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <div className="flex items-center justify-between mt-4">
                    <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                        <input
                            type="file"
                            accept="image/*"
                            id="file-upload"
                            className="hidden"
                            // onChange={handleFileChange}
                            capture="environment"
                        />
                        <span className="text-sm font-medium text-gray-600">Photos</span>
                    </label>
                    <label
                        htmlFor="file-upload"
                        className="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                        <input
                            type="file"
                            accept="video/*"
                            id="file-upload"
                            className="hidden"
                            // onChange={handleFileChange}
                            capture="environment"
                        />
                        <span className="text-sm font-medium text-gray-600">Video</span>
                    </label>

                    <label
                        htmlFor="camera-upload"
                        className="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                        <input
                            type="file"
                            accept="image/*"
                            id="camera-upload"
                            className="hidden"
                            capture="camera"
                            // onChange={handleFileChange}
                        />
                        <span className="text-sm font-medium text-gray-600">Camera</span>
                    </label>
                </div>

                <div className="mt-4 flex gap-2 flex-wrap">
                    {media.map((file, index) => (
                        <div key={index} className="relative w-20 h-20">
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`media-${index}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    // onClick={handleSubmit}
                    disabled={isUploading}
                >
                    {isUploading ? "Uploading..." : "Create"}
                </button>
            </div>
        </>
    )
}

export default CreatePost;