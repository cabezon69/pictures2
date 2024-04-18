import ImageShow from './ImageShow'

function ImageList({ image }){
    const renderImage = Images.map((image) =>{
        return <ImageShow key={image.id} image={image}/>
    })
    return (
        <DIV>
            {renderImage}
        </DIV>
    )
}

export default ImageList