import { useState, useRef } from "react";

const Form = () => {
  const [errors, setErrors] = useState({
    name: "",
    dni: "",
    address: "",
    city: "",
    phoneNumber: "",
  });
  
  const inputName = useRef("");
  const inputDNI = useRef("");
  const inputAddress = useRef("");
  const inputCity = useRef("");
  const inputPhoneNumber = useRef("");
  const inputPay = useRef("");

  const validateRequired = (value) => {
    return value === "" ? "Campo requerido" : "";
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
  
    const name = inputName.current.value;
    const dni = inputDNI.current.value;
    const address = inputAddress.current.value;
    const city = inputCity.current.value;
    const phoneNumber = inputPhoneNumber.current.value;
    const pay = inputPay.current.value;
  
    // Validar todos los campos y generar un nuevo objeto de errores
    const newErrors = {
      name: validateRequired(name),
      dni: validateRequired(dni),
      address: validateRequired(address),
      city: validateRequired(city),
      phoneNumber: validateRequired(phoneNumber),
    };
  
    // Actualizar el estado de errores
    setErrors(newErrors);
  
    // Verificar si hay errores
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
  
    if (!hasErrors) {
      const message = `Hola! Quiero asociarme a la peña. Mi nombre es ${name}, soy de ${city} y mi dirección es ${address}. Mi dni es ${dni} y mi número de teléfono es ${phoneNumber}. Elijo como forma de pago ${pay}`;
  
      // URL de WhatsApp con el mensaje codificado
      const whatsappURL = `https://wa.me/3400537393?text=${encodeURIComponent(message)}`;
  
      // Redirigir a WhatsApp
      location.href = whatsappURL;
    }
  };
  
  return (
    <form className="flex flex-col md:grid md:grid-cols-2 my-8 mt-4 gap-x-10 gap-y-5 card rounded-lg px-6 pt-6 pb-3">
      <div>
        <label htmlFor="name" className="block font text-sm md:text-xl">
          Nombre y apellido *
        </label>
        <input
          name="name"
          ref={inputName}
          type="text"
          className="bg-transparent border-b-2 border-[#ffca095e] p-1 px-0 focus:outline-none w-full text-xs md:text-base"
        />
        {errors.name && <div className="text-yellow pt-1">{errors.name}</div>}
      </div>

      <div>
        <label htmlFor="dni" className="block font text-sm md:text-xl">
          DNI *
        </label>
        <input
          name="dni"
          ref={inputDNI}
          type="number"
          className="bg-transparent border-b-2 border-[#ffca095e] p-1 px-0 focus:outline-none w-full text-xs md:text-base"
        />
        {errors.dni && <div className="text-yellow pt-1">{errors.dni}</div>}
      </div>

      <div>
        <label htmlFor="address" className="block font text-sm md:text-xl">
          Dirección *
        </label>
        <input
          name="address"
          ref={inputAddress}
          type="text"
          className="bg-transparent border-b-2 border-[#ffca095e] p-1 px-0 focus:outline-none w-full text-xs md:text-base"
        />
        {errors.address && <div className="text-yellow pt-1">{errors.address}</div>}
      </div>

      <div>
        <label htmlFor="city" className="block font text-sm md:text-xl">
          Localidad *
        </label>
        <input
          name="city"
          ref={inputCity}
          type="text"
          className="bg-transparent border-b-2 border-[#ffca095e] p-1 px-0 focus:outline-none w-full text-xs md:text-base"
        />
        {errors.city && <div className="text-yellow pt-1">{errors.city}</div>}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block font text-sm md:text-xl">
          Teléfono *
        </label>
        <input
          name="phoneNumber"
          ref={inputPhoneNumber}
          type="number"
          className="bg-transparent border-b-2 border-[#ffca095e] p-1 px-0 focus:outline-none w-full text-xs md:text-base"
        />
        {errors.phoneNumber && <div className="text-yellow pt-1">{errors.phoneNumber}</div>}
      </div>

      <div>
        <label htmlFor="pay" className="block font text-sm md:text-xl">
          Método de pago *
        </label>
        <select
          name="pay"
          ref={inputPay}
          className="bg-transparent border-b-2 border-[#ffca095e] p-1 px-0 focus:outline-none w-full text-xs md:text-base"
        >
          <option value="efectivo" className="bg-blue">
            Efectivo
          </option>
          <option value="transferencia bancaria" className="bg-blue">
            Transferencia bancaria
          </option>
          <option value="debito automatico" className="bg-blue">
            Débito automático
          </option>
        </select>
      </div>

      <button
        onClick={onSubmit}
        className="col-span-2 my-4 border-2 w-20 md:w-28 py-1 text-sm md:text-base flex mx-auto justify-center rounded-lg hover:bg-white hover:text-blue hover:font-bold transition-all"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
