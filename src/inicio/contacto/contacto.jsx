import React, { useState } from 'react';
import './contacto.css'; 

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(''); 

 
    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        if (!name || !email || !message) {
            setError('Todos los campos son obligatorios.');
            return;
        }

       
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setError('Por favor ingrese un correo electrónico válido.');
            return;
        }

       
        setSubmitted(true);
        setError('');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="containercontacto my-5">
            <h1 className="text-center mb-4">Contacto</h1>
            
            {submitted ? (
                <div className="alert alert-success text-center">
                    ¡Gracias por contactarnos! Hemos recibido tu mensaje.
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
    <label htmlFor="name">Nombre</label>
    <input
        type="text"
        id="name"
        className="form-control input-custom"  
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
    />
</div>

                        </div>
                        <div className="col-md-6">
    <div className="form-group d-flex justify-content-between">
        <label htmlFor="email" className="w-50">Correo Electrónico</label>
        <input
            type="email"
            id="email"
            className="form-control input-email-custom"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
    </div>
</div>

                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            className="form-control"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    {error && (
                        <div className="alert alert-danger mt-3">
                            {error}
                        </div>
                    )}

                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            )}

            <h2 className="mt-5 text-center">Contáctanos a través de:</h2>
            <div className="contact-links text-center">
                {/* Correo Electrónico */}
                <a href="mailto:ovallen50@yahoo.com" className="btn btn-outline-info mx-2">
                    <i className="fas fa-envelope"></i> Enviar Email
                </a>

                {/* Llamada Telefónica */}
                <a href="tel:+541167286975" className="btn btn-outline-success mx-2">
                    <i className="fas fa-phone-alt"></i> Llamar
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/1234567890" className="btn btn-outline-success mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </a>

                {/* Redes Sociales */}
                <div className="social-icons mt-3">
                    <a href="https://www.facebook.com/profile.php?id=100029503638140" className="btn btn-outline-primary mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://www.instagram.com/julio_arturo_rodriguez/" className="btn btn-outline-danger mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://twitter.com/JulioQAtester26" className="btn btn-outline-info mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> x
                    </a>
                </div>
            </div>

            <footer className="text-center mt-4">
                <p>&copy; 2024 AlmerTech. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Contact;
