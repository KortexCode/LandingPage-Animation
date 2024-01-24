//Esto código sólo sirve para ejemplo de uso de módulos

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    console.log(item.intersectionRatio);
    if (item.isIntersecting) {
      return;
    }
  });
});

export { observer };
