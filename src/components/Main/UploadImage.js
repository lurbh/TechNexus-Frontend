import { useState, useRef } from "react";
import CloudinaryUploadWidget from "../../context/CloudinaryContext";
import env from "react-dotenv";


export default function UploadImage(props){
    const [img_url, setImg_Url] = useState(props.img);
    const [cloudName] = useState(useRef(env.CLOUDINARY_NAME));
    const [uploadPreset] = useState(useRef(env.CLOUDINARY_UPLOAD_PRESET));

    const [uwConfig] = useState({
        cloudName: cloudName.current,
        uploadPreset : uploadPreset.current,
        folder: props.folder,
        multiple: false,
    })

    return (
        <div className="image-upload">
            <CloudinaryUploadWidget uwConfig={uwConfig} setImg_Url={setImg_Url} setImage_url={props.setImage_url}/>
            <div style={{ width: "300px" }}>
                {img_url?<img src={img_url} alt="Product Card" className="card-image-upload"/>:<></>}
            </div>
        </div>
    )
}