import { async } from '@firebase/util'
import { FormEvent, useEffect, useState } from 'react'
import * as C from './App.styled'
import * as Photos from './services/photos'
import { Photo } from './types/photos'
import { PhotoItem } from './components/PhotoItem'

function App() {

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
  },[])

  const handleFormSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File;
    if(file && file.size > 0){
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      }else{
        let newList = [...photos]
        newList.push(result)
        setPhotos(newList)
      }
    }

  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Photos Gallery</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSumbit}>
          <input type="file" name='image'/>
          <input type="submit" name='send' />
          {uploading && 
            <div>Enviando...</div>
          }
        </C.UploadForm>

        {loading && 
          <C.ScreenWarning>
            <div className='emoji'>🤏</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
            <C.PhotoList>
              {photos.map((item, index)=> (
                <PhotoItem key={index} photo={item}/>
              ))}
            </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className='emoji'>🥺</div>
            <div>Sem fotos para exibir no momento</div>
          </C.ScreenWarning>
        }

      </C.Area>
    </C.Container>
  )
}

export default App
