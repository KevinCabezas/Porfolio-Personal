import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function CONTACTO() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();
    console.log("Enviando formulario...");

    emailjs
      .sendForm(
        "service_kd561eo",
        "template_jypfade",
        form.current,
        "DQG2nBfaXs2JQCYQR"
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          alert("Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
          console.error("Error al enviar:", error);
          alert("Error al enviar el mensaje");
        }
      );
  };

  const estiloInputs = "w-full border border-cyan-300 p-2 rounded outline-none";

  return (
    <section id="contacto" className="min-h-[90vh] bg-fondoUno px-4 py-20 pb-20   flex flex-col items-center">
      <h2 className="text-4xl font-medium text-cyan-500 mb-6 mt-5">CONTACTO</h2>
      <form ref={form} onSubmit={enviarEmail} className="space-y-4 p-4 bg-white text-black shadow rounded w-80">
        <input
          type="text"
          name="user_name"
          placeholder="Tu nombre"
          required
          className={`${estiloInputs}`}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Tu correo"
          required
          className={`${estiloInputs}`}
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className={`${estiloInputs}`}
        />
        <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </section>
  );
}
