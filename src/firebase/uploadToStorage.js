import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {storage} from "./index.js";
import {v4} from "uuid";
import {toast} from "react-toastify";

const uploadToStorage = async (file) => {

    if (!file || !file.type.startsWith("image")) {
        return null;
    }

    if (file.size > 2097152) {
        toast.warning("Medya boyutu 2MB dan fazla olamaz")
        return null;
    }

    const imageRef = ref(storage, v4() + "_" + file.name)
    await uploadBytes(imageRef, file)

    const url = await getDownloadURL(imageRef)

    return url;
}

export default uploadToStorage;