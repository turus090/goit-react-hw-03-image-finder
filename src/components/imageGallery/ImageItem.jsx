import s from './imageGallery.module.css'

const ImageItem = (props) => {
    return (
        <div className={s.imageItem}>
                <img 
                    className={s.imageCard} 
                    src={props.previewURL} 
                    alt={props.tags} 
                />
        </div>
    )
}

export default ImageItem