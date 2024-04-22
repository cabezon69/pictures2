import ImageShow from './ImageShow'
import './Imagelist.css'
function ImageList({ image }){
    const renderImage = Images.map((image) =>{
        return <ImageShow key={image.id} image={image}/>
    })
    return (
        <DIV classname='image-list'>
            {renderImage}
        </DIV>
    )
}

export default ImageList