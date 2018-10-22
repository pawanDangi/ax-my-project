const getCookies = () => {
  let cookies = document.cookie.split(';');
  let all = {};
  cookies.forEach(c => {
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    const value = c.split('=') || [];
    if (value.length === 2) {
      all[value[0]] = value[1]
    }
  })
  return all;
}

export default getCookies;
