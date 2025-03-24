# Formularios


## 1. Campo de texto

```html
<p><label for="campo-nombre">Nombre: </label><input type="text" name="nombre" id="campo-nombre"/></p>
```
Este es un campo de texto donde el usuario puede escribir su nombre.
## 2. Campo de contraseña

```html
<p>Password: <input type="password" name="pass" /></p>
```

El campo de tipo password se utiliza para capturar contraseñas. Los caracteres que el usuario escribe se muestran como asteriscos (*) o puntos.


## 3. Campo de fecha

```html
<p>Date: <input type="date" name="nacimiento" /></p>
```

El campo de tipo date permite al usuario seleccionar una fecha desde un calendario. En este caso, está destinado a capturar la fecha de nacimiento del usuario.

## 4. Campo numérico

```html
<p>Edat: <input type="number" name="edad" value="18" min="1" max="120" /></p>
```

En este ejemplo, se define un rango de valores posibles entre 1 y 120, que son los límites de edad válidos. También se establece un valor predeterminado de 18.

## 5.Casilla de verificación 

```html
<p><input type="checkbox" name="subscribe" id="subscribe"/> 
```

<label for="subscribe">Si no aceptas esta cajetilla de texto, te suscribes a mi mailing de por vida y se te cobraran 1000€ mensuales por la cara</label></p>

Este tipo de campo se usa cuando se desea que el usuario acepte o no una condición (por ejemplo, términos y condiciones). El campo checkbox es útil para permitir múltiples selecciones, aunque en este caso es de marcar o desmarcar.

## 6. Botón de envío

```html
<p><input type="submit" /></p>
```

El campo de tipo submit es un botón que envía los datos del formulario.

# Etiqueta MD

Links automáticos:

Estos son necesarios cuando lo que quieres es mostrar una URL completa, y no un enlace enmascarado bajo una palabra o frase como ocurre con los links en línea.

Para generar links automáticos tan solo tendrás que rodearlos con los símbolos < >.
