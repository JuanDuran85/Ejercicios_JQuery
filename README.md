# JQuery

JQuery es una biblioteca de JavaScript, la cual. es rápida, pequeña y rica en funciones. Hace que cosas como el desplazamiento y la manipulación de documentos HTML, el manejo de eventos, la animación y Ajax sean mucho más simples de usar que funciona en una multitud de navegadores. Con una combinación de versatilidad y extensibilidad, jQuery ha cambiado la forma en que millones de personas escriben JavaScript. Y fue creada en el 2006 por John Resig.

Funciona básicamente de la siguiente manera: Buscar un elemento, se selecciona, se escucha un evento, se carga información y se puede animar.

Para usar JQuery, puedes ingresar directamente a la página de la biblioteca[JQuery Web Site](https://jquery.com/), posteriormente puedes descargar el archivo o utilizar el CDN que ofrece la página para utilizarlo directamente sobre el documento HTML. Siendo estas las dos formas de incluir JQuery en nuestro proyecto.
    
La versión uno es un poco mas pesada que la versión dos, pero es soportada por todos los navegadores web. Mientras que la versión dos y tres no es soportada por el navegador Internet Explorer 6,7 y 8.
    
La documentación de oficial de JQuery se encuentra disponible en [JQuery API](https://api.jquery.com/). También existen otras paginas como: 
    
   * [jQAPI - Alternative jQuery Documentation Browser](http://jqapi.com/)
   * [JQuery Learning Center](https://learn.jquery.com/)
   * [JQuery Tutorial - W3School](https://www.w3schools.com/jquery/default.asp).
    
Para iniciar el código con JQuery, es preferible primeramente asegurar que todos los elementos estén cargos en el HTML. Después de esto, se debe activar el JQuery y posteriormente el JavaScript. JQuery utiliza los selectores de CSS para poder interactuar con el DOM.

El signo $ es el objeto de JQuery.

# AJAX
## Con AJAX puedes:
1. Leer datos de un servidor web: después de que la página se haya cargado.
2. Actualizar una página web sin volver a cargar la página.
3. Enviar datos a un servidor web - en segundo plano.

## Observaciones importantes sobre AJAX:
1. AJAX no es un lenguaje de programación.
2. AJAX es una técnica para acceder a servidores web desde una página web.
3. AJAX significa Asynchronous JavaScript And XML (JavaScript asíncrono y XML).

## Por lo tanto, AJAX solo usa una combinación de:
1. Un objeto XMLHttpRequest integrado en el navegador (para solicitar datos de un servidor web).
2. JavaScript y HTML DOM (para mostrar o usar los datos).
3. Las aplicaciones AJAX pueden usar XML para transportar datos, pero es igualmente común transportar datos como texto sin formato o texto JSON.
4. AJAX permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos con un servidor web detrás de escena. Esto significa que es posible actualizar partes de una página web, sin volver a cargar toda la página.

## ¿Qué es Ajax?
Ajax es una técnica de desarrollo que permite actualizar ciertas partes de una página web, mejorando la interactividad y la experiencia de usuario. Cuando estás navegando en una web tradicional y cambias de página, se producen las siguientes acciones:
* Se envía una petición al servidor para obtener la nueva página.
* El servidor gestiona la petición y envía la página (archivos HTML, CSS, imágenes,entre otros).
* Se muestra la información en la navegador.

Esta ha sido la forma de funcionar desde el principio de la Web, pero con la aparición de Ajax, es posible recargar sólo una parte de la página y no interrumpir constantemente la navegación, realizando de la siguiente manera:
* En primer lugar, se envía una petición al servidor con el objetivo de obtener los datos necesarios.
* El servidor procesa los datos demandados y envía una respuesta. 
* Se reciben los datos y se muestran en una parte de la página, sin recargarla en su totalidad.

En la siguiente imagen se puede observar los pasos anteriores:

![](https://user.oc-static.com/upload/2018/01/22/1516621784103_http-server-client2.png)![](https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01193E_1.png)

## Ventajas de Ajax:
1. No es necesario recargar y redibujar la página web completa, con lo que todo es más rápido.
2. El usuario no percibe que haya demoras: está trabajando y al ser las comunicaciones en segundo plano no hay interrupciones.
3. Los pasos que antes podía ser necesario dar cargando varias páginas web pueden quedar condensados en una sola página que va cambiando gracias a Ajax y a la información recibida del servidor.

## Inconvenientes de Ajax:
1. El usuario puede perder la capacidad para hacer cosas que hacía con webs tradicionales puesto que no hay cambio de página web. Por ejemplo usar los botones de avance y retroceso del navegador o añadir una página a favoritos puede dejar de ser posible. Esto en algunos casos no es deseable.
2. El desarrollo de aplicaciones web se puede volver más complejo. Supongamos que antes tuviéramos un proceso en el que avanzábamos a través de varias páginas web como 1, 2, 3. De este modo la organización resulta sencilla. Si condensamos todo en una sola página web: 1, escribir y depurar el código puede volverse más complicado. En sitios complejos, puede ser muy difícil depurar errores.
3. Existen problemas y restricciones de seguridad relacionados con el uso de Ajax. Hay que tener en cuenta que por motivos de seguridad no todos los procesos se pueden realizar del lado del cliente (que por su propia naturaleza es “manipulable”). También existen restricciones de seguridad para impedir la carga de contenidos mediante Ajax desde sitios de terceras partes.
4. La indexación para los motores de búsqueda se ve dificultada, con lo cual nuestros sitios web pueden perder visibilidad en los buscadores. No es lo mismo un contenido “constante” o aproximadamente estático, fácilmente rastreable para un buscador, que un contenido “cambiante” en función de la ejecución de JavaScript, difícilmente rastreable para un buscador.

# ¿Pero... para que podemos usar AJAX?.
1. Imaginense que deseas armar dos lista, una de empresas, y otras de proveedores en donde un proveedor pertenece a una empresa; sin adentrarnos demasiado en cómo sería el modelo de datos; el usuario debe de seleccionar una empresa para poder cargar un listado de proveedores que pertenecen a la empresa, esta carga puede hacerse mediante AJAX de manera asíncrona sin volver a cargar todo el documento; solo obtenemos la lista de proveedores y la llenamos dentro de la lista.
2. Imaginense que desea mostrar un overlay de distintas páginas desde la página principal según alguna opción seleccionada por el usuario; esta carga de páginas web o secciones se puede hacer de una manera muy simple con AJAX.

- Con AJAX ninguna de las acciones anteriores requiere de una carga completa de la página (como lo tendría que hacer si no utilizaras AJAX), simplemente refrescar secciones del documento; inclusive podemos cargar recursos menos necesarios de manera asíncrona como imágenes

## Parámetros de jQuery.ajax()

jQuery.ajax() maneja una gran cantidad de parámetros que permiten configurar el AJAX de muchas maneras acorde a nuestras necesidades; pero entre los que considero más importantes podemos mencionar los siguientes:
* url: Contiene la URL del recurso al que se desea enviar la petición.
* async (por defecto: true): Por defecto todas las peticiones son configuradas para que sean asíncronas; lo que significa que el resto del JavaScript sigue ejecutándose sin importar si termino de procesar la petición.
* contentType: Indica explícitamente el tipo de datos a recibir desde el servidor
* error: Función que es invocada al ocurrir un error con la petición, incluidos los errores y/o estatus del servidor: 500, 404, 400 etc.
* success: Función que es invocada cuando hubo éxito en el procesamiento de la petición.
* type: GET o POST según sea el caso.

## ¿QUÉ ES XML Y QUÉ ES JSON?

1. XML (extensible markup language) es un lenguaje de etiquetas que se usa para almacenar y enviar información. No vamos a estudiar XML, simplemente pondremos un ejemplo para hacernos una idea de qué son datos en formato XML. XML se usa para múltiples aplicaciones.

2. JSON (JavaScript Object Notation) es un formato para el intercambio de datos que se usa para almacenar y enviar información, basado en la notación literal de objetos de JavaScript. No vamos a estudiar JSON, simplemente pondremos un ejemplo para hacernos una idea de qué son datos en formato JSON. JSON se usa como alternativa al XML en AJAX.