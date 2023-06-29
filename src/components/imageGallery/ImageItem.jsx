import s from './imageGallery.module.css'

const ImageItem = (props) => {
    const handleClick = () => {
        props.handleOpenModal(props.largeImageURL)
    }
    return (
        <div onClick={handleClick} className={s.imageItem}>
                <img 
                    className={s.imageCard} 
                    src={props.previewURL} 
                    alt={props.tags} 
                />
        </div>
    )
}

export default ImageItem