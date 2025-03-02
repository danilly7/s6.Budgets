# SPRINT 6. PROFUNDIZANDO REACT - S6.Presupuestos (React)
## Descripción del proyecto

La aplicación permite generar **presupuestos** para un sitio web mediante casillas de selección, campos de entrada y botones. Los usuarios pueden personalizar sus presupuestos, agregando servicios como SEO, publicidad o diseño web, y obtener un presupuesto **personalizado**. Además, ofrece la opción de guardar estos presupuestos asociándolos a un correo electrónico para su posterior acceso.

<br>

- *La página Home*:

![image](https://github.com/user-attachments/assets/57835a6c-d5c5-4194-887d-5b65cb183424)

<br>

- *Detalles de la página Productos*:

![image](https://github.com/user-attachments/assets/3d0de162-9856-425c-8dbb-2c095f9e1a51)
![image](https://github.com/user-attachments/assets/415ae46d-ae1b-4bd3-802c-a8cb6b0fee42)


<br>

## Estructura principal del proyecto

La estructura sigue un enfoque modular para mantener el código organizado y fácil de escalar.
- src/
     - assets/
     - components/: Componentes reutilizables de la interfaz de usuario y lógica del negocio. Esta carpeta está subdividida en varias secciones:
          - Budgets/: Componentes relacionados con la creación y visualización de los presupuestos.
          - Features/: Componentes para gestionar las características y servicios seleccionados en el presupuesto.
          - Modals/: Componentes de modales reutilizables para mostrar diálogos emergentes.
   - data/
   - hooks/
   - pages/: Contiene los archivos correspondientes a las páginas principales de la aplicación.
       - FeaturesPage.tsx: Página para gestionar las características del presupuesto.
       - HomePage.tsx: Página principal de bienvenida.
   - services/
   - utils/
- App.tsx: Componente principal de la aplicación, donde se configura la estructura general, las rutas y la lógica central.
- main.tsx: Componente de entrada de la aplicación que se encarga de renderizar la aplicación en el DOM.

<br>

## Funcionalidades principales

- ### Navegación entre páginas
Los usuarios pueden navegar fácilmente entre la página principal (HomePage) y la página de productos (FeaturesPage) usando **React Router**. Esta navegación permite una experiencia fluida entre las diferentes secciones de la aplicación.

- ### Manejo de estado global con Context API
Se utiliza **Context API** para gestionar el estado global de la aplicación, como los presupuestos, las características seleccionadas y el estado de descuento. Esto permite que los datos se compartan entre diferentes componentes y páginas sin necesidad de pasar props manualmente.

- ### Cálculo y personalización de presupuestos
Los usuarios pueden personalizar su presupuesto seleccionando diversas opciones y servicios a través de casillas de selección. Además, el sistema calcula el presupuesto total de **manera dinámica**.

- ### Descuento por pago anual
Los usuarios pueden activar un descuento aplicable al presupuesto mediante un interruptor de pago anual en lugar de mensual. Este descuento se gestiona de manera centralizada a través del Context API, afectando el presupuesto final de manera dinámica.

- ### Guardado de presupuestos
Los presupuestos generados se pueden guardar y asociar a un correo electrónico, permitiendo que los usuarios accedan a ellos en cualquier momento.

<br>

## Tecnologias utilizadas en el proyecto

- **React**
- **TypeScript (TSX)**
- **Tailwind CSS**
- **React Router**
- **React Context API**

<br>

## Instalación para ver el proyecto

1. Clona el repositorio

   ```bash
   git clone https://github.com/danilly7/s6.Budgets.git
   cd s6.Budgets
   ``` 
   
2. Asegúrate de tener Node.js instalado

     Verifica que tienes Node.js instalado en tu máquina (preferentemente una versión de 16.x.x o superior):

   ```bash
   node -v
   ```
     Si no lo tienes instalado, puedes descargarlo desde [aquí](https://nodejs.org/en).

3. Instala las dependencias del proyecto

     Si no las has instalado aún, corre el siguiente comando para instalar todas las dependencias necesarias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo

    ```bash
   npm run dev
   ```
5. Accede al proyecto

     Abre el navegador y accede a la URL proporcionada en la consola. La URL será algo similar a:

   ```bash
   Local: http://localhost:5174/
   ```

<br>

## Autora

#### Danilly Condori Lerpido - [GitHub](https://github.com/danilly7)
