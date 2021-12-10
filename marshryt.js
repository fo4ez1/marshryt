let route = [];
route.push("Индустриальная");
route.push("Тракторный завод");
route.push("им. Масельского");
route.push("Армейская");
route.push("Дворец спорта");
route.push("Турбоатом");
route.push("Завод им. Малышева");
alert(route);

while (route.length > 0) {
  route.pop();
  alert(route);
}
