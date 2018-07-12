const september = '{"success":true,"data":{"NCE":{"0":{"price":24459,"airline":"FV","flight_number":6639,"departure_at":"2018-09-03T09:25:00Z","return_at":"2018-09-09T13:30:00Z","expires_at":"2018-07-12T18:43:54Z"},"1":{"price":12500,"airline":"TK","flight_number":420,"departure_at":"2018-09-22T04:20:00Z","return_at":"2018-09-30T18:20:00Z","expires_at":"2018-07-15T19:44:27Z"},"2":{"price":13235,"airline":"AF","flight_number":1745,"departure_at":"2018-09-06T18:45:00Z","return_at":"2018-09-12T13:55:00Z","expires_at":"2018-07-15T19:13:10Z"},"3":{"price":19042,"airline":"AF","flight_number":1745,"departure_at":"2018-09-06T18:45:00Z","return_at":"2018-09-12T06:50:00Z","expires_at":"2018-07-15T19:13:10Z"}}},"error":null,"currency":"rub"}';
const october = '{"success":true,"data":{"NCE":{"0":{"price":24459,"airline":"FV","flight_number":6639,"departure_at":"2018-10-03T09:25:00Z","return_at":"2018-10-10T13:30:00Z","expires_at":"2018-07-12T18:29:15Z"},"1":{"price":11603,"airline":"AF","flight_number":1845,"departure_at":"2018-10-03T06:10:00Z","return_at":"2018-10-17T06:25:00Z","expires_at":"2018-07-15T20:08:06Z"},"2":{"price":13230,"airline":"AF","flight_number":1045,"departure_at":"2018-10-03T15:10:00Z","return_at":"2018-10-11T13:55:00Z","expires_at":"2018-07-15T15:28:09Z"},"3":{"price":19256,"airline":"AF","flight_number":1745,"departure_at":"2018-10-01T18:45:00Z","return_at":"2018-10-10T13:55:00Z","expires_at":"2018-07-15T18:54:44Z"}}},"error":null,"currency":"rub"}';
const november = '{"success":true,"data":{"NCE":{"0":{"price":31652,"airline":"SU","flight_number":2470,"departure_at":"2018-11-12T10:00:00Z","return_at":"2018-11-19T13:05:00Z","expires_at":"2018-07-15T16:46:38Z"},"1":{"price":12500,"airline":"TK","flight_number":418,"departure_at":"2018-11-12T15:30:00Z","return_at":"2018-11-19T10:05:00Z","expires_at":"2018-07-15T16:46:38Z"},"2":{"price":13556,"airline":"AF","flight_number":1745,"departure_at":"2018-11-19T19:45:00Z","return_at":"2018-11-26T18:25:00Z","expires_at":"2018-07-15T16:11:30Z"},"3":{"price":34145,"airline":"SN","flight_number":2836,"departure_at":"2018-11-19T16:30:00Z","return_at":"2018-11-26T06:30:00Z","expires_at":"2018-07-15T16:11:30Z"}}},"error":null,"currency":"rub"}';

const obCheapTicketsSep = JSON.parse(september);
const obCheapTicketsOct = JSON.parse(october);
const obCheapTicketsNov = JSON.parse(november);

const ticketsSep = obCheapTicketsSep["data"]["NCE"];
const ticketsOct = obCheapTicketsOct["data"]["NCE"];
const ticketsNov = obCheapTicketsNov["data"]["NCE"];

let priceSep = [];
let priceOct = [];
let priceNov = [];

for (let k in ticketsSep) {
   priceSep.push(ticketsSep[k]["price"]);
}
for (let k in ticketsOct) {
    priceOct.push(ticketsOct[k]["price"]);
}
for (let k in ticketsNov) {
    priceNov.push(ticketsNov[k]["price"]);
}

const price = priceSep.concat(priceOct, priceNov);

let minPrice = price[0];
for (let m of price) {
    if (m < minPrice) minPrice = m;
}

console.log(minPrice);

