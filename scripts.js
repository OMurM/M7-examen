function moureTasca(taskaElement) {
    const fetesSeccio = document.querySelector('.fetes ul');
    const pendentsSeccio = document.querySelector('.pendents ul');
    pendentsSeccio.removeChild(taskaElement);
    fetesSeccio.appendChild(taskaElement);
    taskaElement.classList.add('moguda');
    taskaElement.removeAttribute('onclick');
  }
  