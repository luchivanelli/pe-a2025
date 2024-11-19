import { useState } from "react"
import {inauguracion, inauguracion2} from "../schemas/schemas"

const GalleryInauguracion = ()=> {
    const [imageSelected, setImageSelected] = useState("")
    const [bandera, setBandera] = useState(false)
    
    const handleModal = ()=> {
        const modalContainer = document.getElementById('modal2-container')  
        modalContainer.classList.toggle('hidden')
    }

    const handleImage = (image)=> {
        setImageSelected(image)
        handleModal()
    }

    const handleLoad = ()=> {
        const buttonMore = document.getElementById('button-more')  
        buttonMore.classList.add('hidden')
        setBandera(true)
    }
    
    return (
        <div className="pb-4">
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[1200px] md:mx-auto h-full">
                {inauguracion.map(image=> (
                    <img key={image} src={image} className="h-[120px] sm:h-[160px] md:h-[200px] object-cover w-full hover:scale-95 transition-all cursor-pointer" onClick={()=> handleImage(image)}/>
                ))}
                {bandera && inauguracion2.map(image=> (
                    <img key={image} src={image} className="h-[120px] sm:h-[160px] md:h-[200px] object-cover w-full hover:scale-95 transition-all cursor-pointer" onClick={()=> handleImage(image)}/>
                ))}
            </div>
            <div className="flex text-sm md:text-lg max-w-[500px] mx-auto">
                <button id="button-more" onClick={handleLoad} className="border-2 border-yellow px-3 py-0.5 flex items-center justify-center rounded-md mx-auto my-2 hover:bg-yellow hover:text-blue transition-all">Cargar más</button> 
                <a href="https://drive.google.com/drive/folders/1d1EOCi7-v-A_lswgzDOR3dz3kcwrV3TE" target="_blank" className="border-2 border-yellow px-3 py-0.5 flex items-center justify-center rounded-md mx-auto my-2 hover:bg-yellow hover:text-blue transition-all">Ver todas las fotos</a> 
            </div>
            <div id="modal2-container" className="hidden justify-center fixed top-0 h-screen w-full bg-[#000000d5] z-50">
                <div className="flex flex-col gap-2 justify-center items-center h-full">
                    <button onClick={handleModal} className="flex items-center gap-1 text-sm md:text-lg bg-yellow text-blue font-bold border-2 border-blue rounded-lg py-0.5 px-2 cursor-pointer hover:scale-105 transition-all">
                        <img src="/icons/arrow-back-up.svg" alt="" className="w-5"/>
                        Volver atrás
                    </button>
                    <img id="img-modal" src={imageSelected} className="max-w-[320px] max-h-[350px] sm:max-w-[400px] sm:max-h-[450px] md:max-w-[600px] md:max-h-[85%]"/>
                </div>
            </div>
        </div>
    )
}

export default GalleryInauguracion