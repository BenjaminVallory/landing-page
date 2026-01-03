# Configuración de EmailJS para el Formulario de Contacto

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

## Paso 2: Conectar tu cuenta de Gmail

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail"
4. Haz clic en "Connect Account" y autoriza con la cuenta **lhambdacompany@gmail.com**
5. Dale un nombre al servicio (ej: "Lambda Company Gmail")
6. Guarda el **Service ID** que aparece (lo necesitarás luego)

## Paso 3: Crear el Template de Email

1. Ve a "Email Templates" en el dashboard
2. Haz clic en "Create New Template"
3. Configura el template con el siguiente contenido:

**Subject (Asunto):**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Content (Contenido del email):**
```
Has recibido un nuevo mensaje desde el formulario de contacto:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Lambda Company
```

4. En "To Email" asegúrate de que esté configurado para enviar a: **lhambdacompany@gmail.com**
5. Guarda el template y copia el **Template ID**

## Paso 4: Obtener tu Public Key

1. Ve a "Account" en el menú superior
2. En la sección "API Keys", encontrarás tu **Public Key**
3. Cópiala

## Paso 5: Configurar las variables de entorno

1. Abre el archivo `.env` en la raíz de tu proyecto
2. Reemplaza los valores con tus credenciales:

```env
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id_real
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id_real
REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key_real
```

## Paso 6: Reiniciar el servidor de desarrollo

**IMPORTANTE:** Después de modificar el archivo `.env`, debes reiniciar tu servidor:

```bash
# Detén el servidor (Ctrl+C)
# Luego vuelve a iniciarlo
npm start
```

## Verificación

1. Abre tu aplicación en el navegador
2. Llena el formulario de contacto con datos de prueba
3. Envía el formulario
4. Revisa la bandeja de entrada de **lhambdacompany@gmail.com**
5. Deberías recibir el email en menos de 1 minuto

## Plan Gratuito de EmailJS

- ✅ 200 emails por mes
- ✅ Sin tarjeta de crédito requerida
- ✅ Soporte para múltiples servicios de email

## Solución de Problemas

### El email no llega
- Verifica que las credenciales en `.env` sean correctas
- Revisa la consola del navegador en busca de errores
- Verifica la carpeta de SPAM en Gmail
- Asegúrate de haber reiniciado el servidor después de modificar `.env`

### Error de CORS
- EmailJS maneja automáticamente los CORS, pero asegúrate de estar usando las credenciales correctas

### Error "Template not found"
- Verifica que el Template ID en `.env` sea correcto
- Asegúrate de que el template esté guardado en EmailJS

## Contacto de Soporte

Si tienes problemas, puedes contactar al soporte de EmailJS en: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
