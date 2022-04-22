import * as C from './style'

import { Photo } from '../../types/photos'

type Props = {
    photo: Photo
}

export const PhotoItem = ({photo}: Props) => {
    return(
        <C.Container>
            <div>
                <img src={photo.url} alt="photoImg" />
                <span>{photo.name}</span>
            </div>
        </C.Container>
    )
}