import { useState } from 'react'
import {inicios, avances, actual} from '../schemas/schemas'
        
const Gallery = ()=> {
    const [gallerySelected, setGallerySelected] = useState(inicios)
    const [imageSelected, setImageSelected] = useState("")
    
    const handleGallery = (gallery)=> {
        setGallerySelected(gallery)
    }
    
    const handleModal = ()=> {
        const modalContainer = document.getElementById('modal-container')  
        modalContainer.classList.toggle('hidden')
    }

    const handleImage = (image)=> {
        setImageSelected(image)
        handleModal()
    }
    

    return (
        <div>
            <div className="flex justify-center pt-6 gap-3 tracking-wide">
                <button className={`text-sm border-2 border-white px-3 rounded-lg hover:bg-white hover:text-blue transition-all ${gallerySelected == inicios ? "bg-white text-blue" : null}`} onClick={()=> handleGallery(inicios)}>Inicios</button>
                <button className={`text-sm border-2 border-white px-3 rounded-lg hover:bg-white hover:text-blue transition-all ${gallerySelected == avances ? "bg-white text-blue" : null}`} onClick={()=> handleGallery(avances)}>Avances</button>
                <button className={`text-sm border-2 border-white px-3 rounded-lg hover:bg-white hover:text-blue transition-all ${gallerySelected == actual ? "bg-white text-blue" : null}`} onClick={()=> handleGallery(actual)}>Actual</button>
            </div>
            
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2  max-w-[1200px] md:mx-auto">
                {gallerySelected.map(image => (
                    <img key={image} src={image} className="h-[120px] sm:h-[160px] md:h-[200px] object-cover w-full hover:scale-95 transition-all cursor-pointer" onClick={()=> handleImage(image)}/>
                ))}
            </div>
            
            <div id="modal-container" className="hidden fixed top-0 h-screen w-full bg-[#000000d5] z-50">
                <div className="flex flex-col gap-2 justify-center items-center h-full">
                    <button onClick={handleModal} className="flex items-center gap-1 text-sm md:text-lg tracking-wider border-[1px] border-yellow rounded-lg py-0.5 px-2 cursor-pointer hover:scale-105 transition-all">
                        <img src="/icons/arrow-back-up.svg" alt="" className="w-5"/>
                        Volver atrás
                    </button>
                    <img id="img-modal" src={imageSelected} className="max-w-[320px] max-h-[350px] sm:max-w-[400px] sm:max-h-[450px] md:max-w-[600px] md:max-h-[85%]"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery