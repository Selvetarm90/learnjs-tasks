if (-1 || 0) alert( 'first' ); // Выполнится (-1 это true)
if (-1 && 0) alert( 'second' ); // не выполнится (0 это false)
if (null || -1 && 1) alert( 'third' ); // выполнится (null || 1 ==> 1)
