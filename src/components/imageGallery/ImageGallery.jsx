import ImageItem from './ImageItem'
import s from './imageGallery.module.css'

const ImageGallery = (props) => {
const ImageCollection = props.imagesStore.map(imageItem => {
    return (
    <ImageItem
        key ={imageItem.id}
        previewURL={imageItem.previewURL}
        largeImageURL ={imageItem.largeImageURL}
        handleOpenModal = {props.handleOpenModal}
        tags={imageItem.tags}
    />
    )
})
    return (
        <div className={s.imageGallery}>
           {ImageCollection}
        </div>
    )
}

export default ImageGallery