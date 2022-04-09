function tickets(usersOnWaiting) {
  let billete25 = 0;
  let billete50 = 0;
  for (let i = 0; i < usersOnWaiting.length; i++) {
    if (usersOnWaiting[i] == 25) {
      billete25 += 1;
    }
    if (usersOnWaiting[i] == 50) {
      billete25 -= 1;
      billete50 += 1;
    }
    if (usersOnWaiting[i] == 100) {
      if (billete50 == 0 && billete25 >= 3) {
        billete25 -= 3;
      } else {
        billete25 -= 1;
        billete50 -= 1;
      }
    }
    if (billete25 < 0 || billete50 < 0) {
      return 'NO';
    }
  }
  return 'YES';
}

tickets([25, 25, 50, 50, 100]);