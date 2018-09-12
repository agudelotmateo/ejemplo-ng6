# EjemploNg6

Este es un pequeño ejemplo de como usar Angular para construir el front end que consume un API rest. 

## Errata

Tal y como vimos en clase, no funcionó. Esto se debe principalmente a la adaptación de nombres que hicimos en caliente y al copy paste del final. Las correcciones son las siguientes:

### Funcionales
- **sidebar.component.ts:** la hoja de estilos tiene extensión `.css` y no `.scss` (en nuestro caso, esto debido a que usamos CSS y no SASS como el tutorial original)
- **reports.component.ts:** en la función `ngOnInit()` utilice un *arrow function* para asignar el valor de `reports`. No usé este tipo de funciones en clase para no tener que explicarlas (excelente error, son mucho más buenas que las ''normales''), pero básicamente permiten tanto una sintaxis mas limpia como el paso de contexto, es decir, de no usarlas en este caso no tendríamos acceso a la variable `reports` de la clase `ReportsComponent`, pues al usar funciones normales el contexto cambia y por tanto `this` hace referencia a otro objeto. Nota: la sintaxis puede ser aún más limpia; de hecho la guía utiliza unicamente arrow functions.
- **add.component.ts:** `report` debe inicializarse como un objeto vacío. El profesor Alejandro me preguntó por esto durante la clase pero no le entendí :pensive:

### Visuales
- **sidebar.component.html:**
    - reemplace ambos `posts` de la equiqueta `a` por `reports`
    - reemplace `comment` en el nombre del primer botón por `add`
    - reemplace `book` en el nombre del segundo botón por `reports`
- **api.service.ts:** en el string que se imprime en caso de error, cambie `post` por `report`
- **reports.component.hml:** reemplace todos los `posts` por `reports`

Se recomienda que corrijan el código propio, pero de cualquier manera el código contenido en este repositorio parece funcionar correctamente.

## Otros errores

La aplicación es muy pobre y le falta mucho, pero hay dos cosas que quisiera mencionar:

- Al agregar un reporte, el usuario no recibe feedback. La unica forma de saberlo es abriendo la consola (`Ctrl` + `Shift` + `I` en Firefox); en caso de error lo va a imprimir, y en caso de éxito va a imprimir el objeto que guardó. 

- A veces se toma un tiempo para cargar los reportes. Siempre y cuando no imprima un error en consola, está cargando.

- Hay un problema con el API y es que no envía en sus respuestas un header necesario para permitir el acceso a este desde otras aplicaciones (como la nuestra). Mientras esto se resuelve, es necesario saltarse el CORS. Para esto en Firefox se puede usar el Add-on [CORS Everywhere](https://addons.mozilla.org/es/firefox/addon/cors-everywhere/); recuerde nunca hacer esto para otras páginas.


## Extra

La guía que escribí y utilicé durante la clase también está en este repositorio en la carpeta `/latex`, tanto el `.pdf` como el `.tex` por si le quieren agregar o cambiar algo. La pueden manipular ya sea localmente o utilizando herramientas gratuitas como [Overleaf](https://www.overleaf.com/)

Recuerden además visitar la [guía original (en inglés)](https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course) para mayor información, sobre todo para que no se vea tan fea la aplicación :sweat_smile:
