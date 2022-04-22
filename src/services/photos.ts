import { Photo } from '../types/photos'
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as createId } from 'uuid'

export const getAll = async () => {
    let list: Photo[] = []

    const imagesFolder = ref(storage, "images")
    const photosList = await listAll(imagesFolder)
    
    for (let i in photosList.items) {

        let photoUrl = await getDownloadURL(photosList.items[i])

        list.push({
            name: photosList.items[i].name,
            url: photoUrl
        })
    }

    return list;
}

export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){
        let randomName = createId()
        let newFile = ref(storage, `imgaes/${randomName}`)
        let upload = await uploadBytes(newFile, file)
        let photoUrl = await getDownloadURL(upload.ref)
        return {name: upload.ref.name, url: photoUrl} as Photo;
    } else {
        return new Error ("File type is not valid")
    }
}