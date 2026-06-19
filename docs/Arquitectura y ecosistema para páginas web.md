# Arquitectura y Ecosistema de Desarrollo Web: Estándar de Alto Rendimiento

Este documento define el flujo de trabajo, el stack tecnológico y los estándares de calidad para la creación de sitios web de primer nivel. El objetivo es garantizar que cada proyecto sea **ultrarrápido**, **seguro**, **optimizado para SEO** y **fácilmente editable** para el cliente, utilizando un enfoque basado puramente en código moderno.

---

## 1. Stack Tecnológico (Core)

Para alcanzar el máximo rendimiento (100/100 en Google PageSpeed), el ecosistema se basa en la arquitectura **Jamstack**.

| Componente | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework Base** | **React + Vite** | Desarrollo rápido con HMR y builds optimizados. Alternativa: Astro para SSG. |
| **UI Framework** | **TypeScript** | Tipado estricto para mayor seguridad y mantenibilidad. |
| **Estilos** | **Tailwind CSS** | Diseño rápido, consistente y optimizado para producción. |
| **Animaciones** | **GSAP** (prioritario) / Framer Motion | Efectos visuales de alto impacto, parallax y micro-interacciones premium. GSAP para animaciones complejas de scroll/timeline; Framer Motion para componentes React interactivos. |
| **Content Management** | **Sanity.io (Headless CMS)** | Gestión de contenido desacoplado que permite al cliente editar sin tocar el código. |
| **Hosting / Edge** | **Vercel / Netlify / GCP** | Despliegue continuo (CI/CD) con entrega de contenido desde el borde (Edge). |

---

## 2. Flujo de Trabajo (Workflow)

Cada proyecto debe seguir estas fases para asegurar la eficiencia y la calidad:

### Fase 1: Modelado de Datos y CMS
1. Definir los esquemas de contenido en **Sanity** (Servicios, Blog, Miembros del Equipo).
2. Entregar acceso al cliente para que empiece a cargar contenido real mientras se desarrolla el frontend.

### Fase 2: Estructura y Maquetación (Vite + React)
1. Configurar el proyecto base con Vite, React y Tailwind.
2. Crear los **Layouts** globales (Header, Footer, Navegación).
3. Desarrollar componentes de UI atómicos y reutilizables en `src/components/`.

### Fase 3: Interactividad y "Efectos Vistosos"
1. Identificar secciones que requieren dinamismo.
2. Implementar animaciones de entrada y scroll con **GSAP** para el toque "premium".
3. Usar React Router DOM para manejo de rutas con desplazamiento superior automático.

### Fase 4: Optimización Técnica
1. **Imágenes:** Optimizar imágenes y usar clases `object-cover` o `object-center`.
2. **SEO:** Configurar metadatos dinámicos, Open Graph y Sitemap por cada ruta.
3. **Fuentes:** Alojar fuentes localmente o usar Google Fonts para evitar bloqueos de renderizado.

### Fase 5: Calidad y Testing
1. **Pruebas Unitarias:** Vitest para lógica de utilidades y componentes.
2. **Pruebas E2E:** Playwright para flujos críticos (formularios, navegación).
3. **Auditoría Lighthouse:** Meta >95 en Performance, Accessibility, SEO y Best Practices.
4. Validación de accesibilidad (WCAG 2.1 AA).

### Fase 6: Despliegue y Entornos
1. Configurar entornos: `development`, `staging` y `production`.
2. Gestionar variables de entorno con `.env` y validación mediante `zod` o similar.
3. Conectar repositorio de GitHub con plataforma de hosting (Vercel/Netlify).
4. Implementar previews automáticas para cada Pull Request.

---

## 3. Control de Versiones y Colaboración

### Convenciones de Commits (Conventional Commits)
- `feat:` Nuevas funcionalidades
- `fix:` Corrección de errores
- `refactor:` Cambios de código sin cambiar comportamiento
- `docs:` Cambios en documentación
- `style:` Formateo, faltantes de punto y coma, etc.
- `test:` Agregar o corregir pruebas

### Ramas (Git Flow Simplificado)
- `main`: Producción (protegida, requiere PR)
- `develop`: Integración de funcionalidades
- `feature/*`: Nuevas funcionalidades
- `hotfix/*`: Correcciones urgentes en producción

### Herramientas
- **Husky:** Hooks de git para validaciones pre-commit
- **lint-staged:** Ejecutar linters solo en archivos staged
- **Commitizen:** Ayuda para seguir convenciones de commits

---

## 4. Estructura del Proyecto (Estandarización)

Todo proyecto debe seguir esta estructura base para garantizar consistencia entre entregas:

```text
/
├── frontend/           # Aplicación principal
│   ├── src/
│   │   ├── components/     # Componentes reutilizables UI
│   │   ├── pages/         # Vistas completas (Home, About, Contact, etc.)
│   │   ├── lib/           # Configuración de Sanity, helpers y utilidades de API
│   │   ├── assets/        # Imágenes locales, fuentes y SVGs
│   │   ├── hooks/         # Custom hooks de React
│   │   └── types/         # Definiciones de tipos TypeScript compartidos
│   ├── public/            # Archivos estáticos (favicon, robots.txt)
│   └── package.json
├── studio/             # Sanity CMS
│   ├── schemaTypes/       # Esquemas de contenido
│   └── sanity.config.ts
├── docs/               # Documentación genérica y estándares
└── README.md           # Documentación principal del proyecto (personalizado por marca)
```

### README.md - Documentación por Proyecto
El archivo `README.md` debe personalizarse para cada cliente/marca e incluir:
- Nombre del proyecto y descripción de la empresa
- Stack tecnológico utilizado
- Instrucciones de instalación y desarrollo
- Esquemas de Sanity configurados según el negocio
- Paleta de colores de la marca (códigos HEX)
- Configuración para producción
- Firma corporativa: `Desarrollada por Promptend | [promptendweb.com](http://promptendweb.com/)`

Para proyectos Astro (alternativa SSG):

```text
/
├── src/
│   ├── components/         # Componentes reutilizables (.astro o .tsx)
│   │   ├── ui/            # Botones, inputs, tarjetas (átomos)
│   │   ├── sections/      # Secciones de página (Hero, Features, ContactForm)
│   │   └── layouts/       # Sub-layouts y wrappers específicos
│   ├── pages/             # Rutas del sitio (index.astro, servicios/[slug].astro)
│   ├── layouts/           # Plantillas de página (BaseLayout.astro, BlogLayout.astro)
│   ├── styles/            # CSS global, variables y configuraciones de Tailwind
│   ├── lib/               # Configuración de Sanity, helpers y utilidades de API
│   ├── assets/            # Imágenes locales, fuentes y SVGs originales
│   ├── hooks/             # Custom hooks de React (si se usa React)
│   └── types/             # Definiciones de tipos TypeScript compartidos
├── public/                # Archivos estáticos (favicon, robots.txt, sitemap.xml)
├── tests/                 # Pruebas E2E y utilidades de testing
├── .husky/                # Git hooks (pre-commit, pre-push)
├── astro.config.mjs       # Configuración del framework
├── tailwind.config.ts     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
├── vitest.config.ts       # Configuración de pruebas unitarias
└── playwright.config.ts   # Configuración de pruebas E2E
```
