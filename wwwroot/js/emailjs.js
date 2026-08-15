// ============================================
// CONFIGURACION DE EMAILJS
// ============================================
// 1. Crea una cuenta gratuita en https://www.emailjs.com/
// 2. Ve a Email Services -> Add New Service -> conecta tu Gmail
// 3. Ve a Email Templates -> Create New Template
// 4. Copia tus credenciales aqui abajo
// ============================================

const EMAILJS_CONFIG = {
    publicKey: "mNCy8BpY8wfEDqMy9",      // EmailJS -> Account -> API Keys
    serviceId: "service_vanlww6",      // EmailJS -> Email Services
    templateId: "template_g43y7ns"     // EmailJS -> Email Templates
};

// Inicializar EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
})();

// Funcion que Blazor llama para enviar el email
window.sendContactEmail = async function(name, email, subject, message) {
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "jorge2echemendia@gmail.com"
    };

    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );
        return { success: true, message: "Mensaje enviado correctamente" };
    } catch (error) {
        console.error("Error EmailJS:", error);
        return { success: false, message: "Error al enviar el mensaje: " + error.text };
    }
};
