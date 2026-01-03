# DevSoft Studio - React Landing Page

🚀 **Landing page moderna desarrollada en React** para empresa de desarrollo de software con tema oscuro, animaciones fluidas y diseño completamente responsive.

![DevSoft Studio](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.5-FF0066?style=for-the-badge&logo=framer)
![CSS3](https://img.shields.io/badge/CSS3-100%25-1572B6?style=for-the-badge&logo=css3)

## ✨ Características Principales

### 🎨 **Diseño & UX**
- ✅ **Tema oscuro completo** con paleta de colores profesional
- ✅ **Diseño minimalista** y elegante
- ✅ **Totalmente responsive** (móvil, tablet, desktop)
- ✅ **Fuentes Google**: DM Sans y Geom
- ✅ **Paleta de colores**: Negro, gris oscuro, rojo (#a80505), dorado

### 🎭 **Animaciones & Efectos**
- ✅ **Framer Motion** para animaciones fluidas
- ✅ **Elementos flotantes** con parallax en hero section
- ✅ **Carrusel infinito** auto-animado de tecnologías
- ✅ **Animaciones on-scroll** con Intersection Observer
- ✅ **Efectos hover** sofisticados en todos los componentes
- ✅ **Transiciones suaves** entre secciones

### 🔧 **Funcionalidades React**
- ✅ **Lazy loading** de componentes con Suspense
- ✅ **Error boundaries** para manejo de errores
- ✅ **React Hook Form** para formulario de contacto
- ✅ **React Hot Toast** para notificaciones
- ✅ **Hooks personalizados** para lógica reutilizable
- ✅ **Optimización de rendimiento** con useMemo y useCallback

### 📱 **Responsive & Accesibilidad**
- ✅ **Mobile-first design** approach
- ✅ **Navegación por teclado** completa
- ✅ **ARIA labels** apropiados
- ✅ **Skip links** para screen readers
- ✅ **Soporte para reduce motion**
- ✅ **Alto contraste** compatible

## 🏗️ Estructura de Componentes

```
src/
├── App.js                          # Componente principal
├── index.js                        # Punto de entrada
├── components/
│   ├── ErrorBoundary.js            # Manejo de errores
│   ├── LoadingSpinner.js           # Componente de carga
│   ├── Navbar.js                   # Navegación principal
│   ├── Hero.js                     # Sección hero con animaciones
│   ├── Services.js                 # Servicios con tarjetas animadas
│   ├── Technologies.js             # Carrusel de tecnologías
│   ├── Portfolio.js                # Proyectos destacados
│   ├── Contact.js                  # Formulario de contacto
│   ├── Footer.js                   # Footer completo
│   └── styles/                     # Estilos CSS modulares
│       ├── Navbar.css
│       ├── Hero.css
│       ├── Services.css
│       ├── Technologies.css
│       ├── Portfolio.css
│       ├── Contact.css
│       └── Footer.css
└── styles/
    ├── index.css                   # Estilos globales
    └── App.css                     # Estilos del App principal
```

## 📋 Secciones Implementadas

### 1. **Navegación (Navbar)**
- Logo animado
- Menú responsive con hamburguesa
- Smooth scroll entre secciones
- Indicador de sección activa
- Efecto blur en scroll

### 2. **Hero Section**
- Título con animación de escritura
- Elementos flotantes interactivos con parallax
- Botones CTA con efectos hover
- Indicador de scroll animado
- Background con efectos de partículas

### 3. **Servicios**
- 6 servicios principales con tarjetas animadas
- Landing Pages, E-commerce, Software a medida
- Sistemas de reservas, Apps móviles, Turismo digital
- Iconos animados y efectos hover
- Features destacados por servicio

### 4. **Tecnologías**
- Carrusel infinito auto-animado
- 4 categorías: Frontend, Backend, Mobile, Cloud
- Pausa en hover, controles de reproducción
- 24 tecnologías con iconos de React Icons
- Barras de progreso animadas

### 5. **Portfolio**
- 3 proyectos de ejemplo
- Previews interactivos con overlays
- Stack tecnológico por proyecto
- Estadísticas de rendimiento
- Enlaces a demo y código

### 6. **Contacto**
- Formulario funcional con React Hook Form
- Validación en tiempo real
- Información de contacto animada
- Links a redes sociales
- Sistema de notificaciones

### 7. **Footer**
- Links organizados por categoría
- Newsletter subscription
- Estadísticas de la empresa
- Botón back to top
- Información de contacto completa

## 🚀 Tecnologías Utilizadas

### **Core Technologies**
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```

### **Animation & Effects**
```json
{
  "framer-motion": "^10.16.5",
  "react-intersection-observer": "^9.5.3"
}
```

### **Form & UI**
```json
{
  "react-hook-form": "^7.47.0",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^4.12.0"
}
```

### **Styling**
- **CSS3** con variables personalizadas
- **CSS Grid** y **Flexbox** para layouts
- **CSS Modules** para estilos componetizados
- **Media queries** para responsive design

## 🎨 Paleta de Colores

```css
:root {
  /* Colores principales */
  --primary-red: #a80505;      /* Color principal */
  --dark-red: #7a0404;         /* Variante oscura */
  --light-red: #cc0606;        /* Variante clara */
  --black: #000000;            /* Fondo principal */
  --dark-gray: #0d0d0d;        /* Fondo secundario */
  --medium-gray: #1a1a1a;      /* Elementos */
  --light-gray: #2d2d2d;       /* Bordes */
  --gold: #d4af37;             /* Acentos dorados */
  --light-gold: #f4d03f;       /* Dorado claro */
  --text-white: #f5f5f5;       /* Texto principal */
  --text-gray: #b0b0b0;        /* Texto secundario */
}
```

## 📦 Instalación y Uso

### **Requisitos Previos**
- Node.js 14.x o superior
- npm 6.x o yarn 1.22.x o superior

### **Instalación**
```bash
# Clonar el repositorio
cd landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Construir para producción
npm run build
```

### **Scripts Disponibles**
```bash
npm start      # Servidor de desarrollo (puerto 3000)
npm run build  # Build de producción
npm test       # Ejecutar tests
npm run eject  # Eyectar configuración de CRA
```

## 🛠️ Personalización

### **Cambiar Colores**
Edita las variables CSS en `src/styles/index.css`:
```css
:root {
  --primary-red: #tu-color-principal;
  --gold: #tu-color-secundario;
  /* ... más variables */
}
```

### **Modificar Contenido**
1. **Información de empresa**: Edita los componentes directamente
2. **Servicios**: Modifica el array `servicesData` en `Services.js`
3. **Tecnologías**: Actualiza `techCategories` en `Technologies.js`
4. **Portfolio**: Cambia `portfolioData` en `Portfolio.js`

### **Añadir Nuevas Secciones**
1. Crea nuevo componente en `src/components/`
2. Añade estilos en `src/components/styles/`
3. Importa y usa en `App.js`
4. Añade navegación en `Navbar.js`

## 🎯 Optimizaciones Implementadas

### **Performance**
- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ Debounced scroll events
- ✅ Intersection Observer para animaciones
- ✅ CSS `will-change` para animaciones

### **SEO**
- ✅ Meta tags optimizados
- ✅ Estructura HTML semántica
- ✅ Open Graph tags ready
- ✅ Manifest.json para PWA
- ✅ Aria labels y accessibility

### **UX**
- ✅ Loading states en formularios
- ✅ Error boundaries para recuperación
- ✅ Notificaciones toast
- ✅ Smooth scrolling
- ✅ Responsive breakpoints

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { /* Móviles pequeños */ }
@media (max-width: 768px) { /* Móviles y tablets */ }

/* Tablet */
@media (max-width: 1024px) { /* Tablets y laptops pequeñas */ }

/* Desktop */
@media (min-width: 1024px) { /* Desktop y pantallas grandes */ }
```

## 🔧 Estructura de Carpetas

```
public/
├── index.html              # HTML principal
├── manifest.json           # PWA manifest
├── favicon.ico             # Favicon
└── robots.txt              # SEO robots

src/
├── components/             # Componentes React
│   ├── [Component].js      # Lógica del componente
│   └── styles/             # Estilos específicos
│       └── [Component].css
├── styles/                 # Estilos globales
│   ├── index.css           # Variables y reset
│   └── App.css             # Estilos del App
├── App.js                  # Componente raíz
└── index.js                # Entry point
```

## 🌟 Características Avanzadas

### **Animaciones Personalizadas**
- Elementos flotantes con física realista
- Carrusel infinito sin cortes
- Transiciones staggered
- Parallax suave en hero section

### **Formulario Avanzado**
- Validación en tiempo real
- Estados de loading/success/error
- Accessibility completo
- Estilos dinámicos según estado

### **Navegación Inteligente**
- Auto-detección de sección activa
- Smooth scroll programático
- Menú móvil con animaciones
- Keyboard navigation completa

## 📊 Métricas de Performance

### **Lighthouse Score Target**
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 95+
- 🟢 **SEO**: 100

### **Web Vitals**
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

## 🚀 Despliegue

### **Build de Producción**
```bash
npm run build
```
Esto genera una carpeta `build/` optimizada lista para producción.

### **Opciones de Hosting**
- **Netlify**: Drag & drop de carpeta build
- **Vercel**: Deploy automático desde Git
- **GitHub Pages**: Usando gh-pages
- **Firebase Hosting**: Para PWA completa

### **Variables de Entorno**
Crea `.env` en la raíz del proyecto:
```env
REACT_APP_CONTACT_EMAIL=tu-email@dominio.com
REACT_APP_PHONE=+1-234-567-8900
REACT_APP_ANALYTICS_ID=tu-analytics-id
```

## 🔒 Seguridad

- ✅ Sanitización de inputs en formularios
- ✅ Validación client-side y server-side
- ✅ Headers de seguridad configurados
- ✅ No exposición de datos sensibles
- ✅ HTTPS only en producción

## 🤝 Contribución

### **Guías de Desarrollo**
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### **Estándares de Código**
- Usar ESLint y Prettier
- Componentes funcionales con hooks
- Props destructuring
- Naming conventions consistentes

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 💡 Créditos

**Desarrollado con ❤️ por DevSoft Studio**

- **React** - Biblioteca de UI
- **Framer Motion** - Librería de animaciones
- **React Icons** - Iconos vectoriales
- **Google Fonts** - Tipografías (DM Sans, Geom)

---

**¿Necesitas personalizar esta landing page para tu empresa?**
📧 contacto@devsoftstudio.com | 📱 +1 (555) 123-4567

**🌟 ¡Dale una estrella si te gustó este proyecto!**