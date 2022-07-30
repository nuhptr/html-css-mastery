// Data pada set tidak bisa double / lebih dari 1

const numberSet = new Set([1, 4, 4, 7, 10]);

console.log(numberSet);
/* Output :
  Set(4) { 1, 4, 7, 10 }
 */

// TODO: Menambahkan data kedalam Set
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

/* Output : 
  Set(6) { 1, 4, 7, 10, 5, 6 }
*/

// TODO: Menghapus data dalam Set
numberSet.delete(4);

console.log(numberSet);

/* Output : 
  Set(5) { 1, 7, 10, 5, 6 }
*/
