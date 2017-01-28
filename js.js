var arr_1 = ['Apple',' Mango',' Banana'],
    arr_2 = [];
    arr_2[0] = 'Tomato';
    arr_2[1] = ' Potato';
    arr_2[2] = ' Onion';

  document.write(arr_1);
  document.write('<br>');
  document.write(arr_1.length);
  document.write('<br>');
  document.write(arr_1[0]);
  document.write('<br>');
  document.write(arr_1[1]);
  document.write('<br>');
  document.write(arr_1[2]);




  arr_1[3] = 'Orange';

  document.write('<br>');
  document.write(arr_1[3]);

  arr_1[0] = 'Kiwi';
  document.write('<br>');
  document.write(arr_1.length);
  document.write('<br>');
  document.write(arr_1[0]);
  document.write('<br>');

  arr_length = arr_1.push('Grapes');
  document.write(arr_1);
  document.write('<br>');
  document.write(arr_length);
  document.write('<br>');


  arr_length = arr_1.unshift('Pinapple');
  document.write(arr_1);
  document.write('<br>');
  document.write(arr_length);
  document.write('<br>');


  arr_1.pop();
  document.write(arr_1);
  document.write('<br>');

  arr_1.shift();
  document.write(arr_1);
  document.write('<br>');

  delete arr_1[2];
  document.write(arr_1);
  document.write('<br>');

  arr_1.splice(2, 0, 'Lemon', 'Berry');
  document.write(arr_1);
  document.write('<br>');

  arr_1.splice(4, 1);
  document.write(arr_1);
  document.write('<br>');

  document.write(arr_2);
  document.write('<br>');
  document.write(arr_2[0]);
  document.write('<br>');
  document.write(arr_2[1]);
  document.write('<br>');
  document.write(arr_2[2]);
  document.write('<br>');
  document.write(arr_2.length);

  var arr_3 = new Array(6,5,4,3);
      arr_3[4] = 9;
      document.write('<br>');
      document.write(arr_3);
      document.write('<br>');
      document.write(arr_3.length);
