citas_react
---
---

Deployment of citas project on React using Vite and TailwindCSS, and notes of it.

# Notas del proyecto de citas en React

## Creación del proyecto y configuración del proyecto

---

El proyecto se crea usando Vite de la siguiente forma:

```bash
npm init vite@latest
```

Después se configura el nombre, el framework y el lenguaje a usará en este caso seleccionamos **React** y **JavaScript**.

Más tarde entramos a la carpeta del proyecto, instalamos las dependencias y podemos correr el proyecto de la siguiente forma:

```bash
npm install
npm run dev
```

## Lenguaje usado por React

---

JSX
:**JavaScript Syntax Extension** (Extensión del lenguaje, un lenguaje de templates que tiene js sobre html).

**Reglas generales de JSX:**

- JSX sí es estricto en HTML.
- Las etiquetas de solo apertura sí deben finalizar con />.
- Cada componente debe tener un return.
- Este return debe ser máximo un solo elemento en el nivel más alto.

## Ejemplo de un componente

---

```JavaScript
function App() {
  const edad = 10;

  return (
    <> {/*Se puede crear un fragment y así evitar hacer un montón de divs*/}

      {`Edad: ${edad + 1}`} {/* Se puede poner código js entre llaves */}

      {/* También se pueden poner operador ternario para alguna condición */}
      {edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad'}

      <h1>{'Hola mundo'.toUpperCase()}</h1>
      <img src="algunaimagen.jpg"/>
    </>
  )
}

export default App
```

Los componentes se hacen uno en cada archivo y el nombre de este siempre empieza con mayúsculas y tiene extensión .jsx

## Escribir CSS en React

---

**Existen varias formas de agregar CSS a un proyecto de react:**

- Escribir CSS plano en los archivos.
- Framework CSS.
- Módulos CSS.
- Componentes de react en librerías.
- SASS en react.
- Styled components (tomar componentes estilizados).

## Instalando TailwindCSS

---

Se instala usando:

```bash
npm i -D tailwindcss postcss autoprefixer
```

**_NOTA:_** _El -D indica que solo de usará en el entorno de desarrollo._

Una vez instalado se configura el tailwind y el postcss, para esto primero se crean los archivos con:

```bash
npx tailwindcss init -p
```

## Configurando TailwindCSS con el proyecto de React

---

Se agregan las directivas siguientes en el archivo index.css para usar tailwind correctamente:

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Y también se agrega en el archivo de tailwind.config.js los archivos que va tomar el framework:

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"], // Todos los archivos de src que terminen con .jsx
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Sumado a esto, por ser la versión nueva de tailwindcss (3), se debe ejecutar el siguiente comando en el proyecto para que se actualice solo:

```bash
npx tailwindcss -i ./src/index.css -o ./src/dist/output.css --watch
```

También se debe importar el output a main.jsx en vez del index.css

```JavaScript
import './dist/output.css'
```

## Uso de clases

---

No se puede usar la palabra **class** en un archivo JSX porque es reservada de JS, por ello debemos poner **className**.

## Herramienta de navegador

---

No olvidar que existe **una extensión en chrome y otros navegadores** para poder ver los componentes desde las herramientas del mismo.

## Ract Hooks

---

- Están disponibles desde la versión 16.8 de React.
- Antes de que salieran los Hooks, se tenía que crear una clase para poder modificar el state.
- Existen los básicos y los avanzados que casi nunca se usarán.

### Categorías de Hooks

- Básicos
  - useState
  - useEffect
  - useContext
- Avanzados
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue

Se puede **crear hooks propios** y de esta forma separar el código en funciones reutilizables.

### Reglas de los Hooks

- Se colocan en la parte superior de los componentes.
- No se deben colocar dentro de condicionales.
- no se deben colocar después de un return.

## React State

---

El state es básicamente la información sobre el estado de nuestra aplicación.

Consiste en una variable con información relevante en nuestra aplicación, a veces pertenece solo a un componente o a varios componentens compartidos.

Se agrega a un componente de la siguiente manera:

```JavaScript
import {useState} from "react"
```

Después de mandar a llamar o inicializar de la siguiente forma:

```JavaScript
const [cliente, setCliente] = useState({});
const [total, setTotal] = useState(0);
const [clientes, setClientes] = useState([]);
const [modal, setModal] = useState(false);
```

En donde el arreglo tendrá en el primer elemento el valor del estado el cuál **solo se puede leer**. En el segundo elemento tendrá la función para **asignar el valor**. Del otro lado de la igualdad tendrá la primera asignación del estado, la cual indicará el **tipo de dato**.

### Uso reactivo del state

Consiste en que si relacionamos por medio del uso del valor del state a algo en el documento, este se actualizará cada que su valor cambie por medio de la función set del mismo state.

## Eventos en React

---

Son similares a los de JS, de hecho tienen los mismos eventos, solo que en este caso se ponen en camelCase.

Y a diferencia de HTML/JS, el nombre de la función, en vez de string, se utiliza la función como tal.

### Diferencias de sintaxis

- HTML

  ```html
  <button onclick="descargarPedidos()">
    Descargar pedidos
  </button>
  ```

  ```html
  <form onsubmit="agregarCliente(); return false">
    <button type="submit">Submit</button>
  </form>
  ```

- JSX

  ```html
  <button onsubmit="{handleSubmit}">
    <button type="submit">Submit</button>
  </button>
  ```

## Props (propiedades) en React

---

El state solo estarán en el componente donde se creen. Para evitar duplicidad se código, se pueden reutilizar esas variables, state y funciones por medio del de Props.

Los props **pasan del padre al hijo**.

Sintaxis para pasar del padre al hijo:

```html
<header nombreProp="{datos" o funciones} />
```

Se acceden por props como argumento de la función del componente.

```JavaScript
function Header(props){
  ...
}
```

O también aplicando desctructuring directamente:

```JavaScript
function Header({nombreProp}){
  ...
}
```

Una _**forma alterna**_ de hacerlo es por medio del children, en el lado del hijo se haría algo así (a manera de inyección):

```JavaScript
function Header({children}){
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}
```

Mientras que desde el padre se manda de la siguiente manera:

```JavaScript
<Header>Lo que se quiere mandar</Header>

```

_**NOTA:** Se le puede pasar todo tipo de dato_

> Siempre que se pasa un state por diferentes componentes, es mejor colocarlo en un componente padre y pasarlo por props.

_**NOTA:** Para pasar el hijo al padre, se puede hacer por medio de una función del padre que se pasa props, la cual recibe un valor y lo asigna al state del padre._

## useEffect en React

---

Es un callback, este se ejecuta cuando un state cambia o cuando el componente está listo.

Su sintaxis es la siguiente:

```JavaScript
import {useEffect} from "react"

...

useEffect(() => {
  // código que se ejecuta cuando el componente está listo
}, [/* dependencias */]);
```

> En lugar de useEffect se usaba antes el **componentDidMount()** o el **componentDidUpdate()**

_**NOTA:** Se ejecutan en el **orden** en el que fueron declarados en el componente_

## Deployment del proyecto hacia Netlify

---

Lo primero que debemos hacer es hacer el build del proyecto, para esto hacemos uso de:

```bash
npm run build
```

Este comando creará una **carperta dist** donde estará todo el proyecto comprimido, pero solo lo que necesitamos, va eliminar lo que no ocupamos de tailwindcss.
