/*
Volumen de un cono 🚀
Cree una función que tome la altura y el radio de un cono como argumentos y devuelva el volumen del cono redondeado a la centésima más cercana.

Volume of a Cone Image

Ejemplos
coneVolume(3, 2) ➞ 12.57

coneVolume(15, 6) ➞ 565.49

coneVolume(18, 0) ➞ 0
Notas
Devuelve la respuesta aproximada redondeando la respuesta a la centésima más cercana. -Si tu lenguaje para resolverlo es JS Usa la propiedad PI de JavaScript, no caigas en 3.14 ;-)
Si el cono no tiene volumen, devuelve 0.
*/

function coneVolume(h, r) {
  let volumen = (Math.PI * (Math.pow(r, 2) * h)) / 3;
  let resultadoRedondeado = volumen > 0 ? volumen.toFixed(2) : (volumen = 0);
  console.log(resultadoRedondeado);
}

coneVolume(3, 2); // 12.57
coneVolume(15, 6); // 565.49
coneVolume(18, 0); // 0
