function gridMap(fn,a) {
    return a.map(arr => arr.map(fn))
  }
  const numberGrid = [ [1,2,3,4]
  , [5,6,7,8,9]
  , [0,2,4]
  ];
  console.log(
gridMap( x => x+1 , numberGrid ), //[[2,3,4,5],[6,7,8,9,10],[1,3,5]],// "for x => x+1, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]" );
gridMap( x => x*2 , numberGrid ),// [[2,4,6,8],[10,12,14,16,18],[0,4,8]],// "for x => x*2, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]" );
gridMap( x => x**2 , numberGrid ),// [[1,4,9,16],[25,36,49,64,81],[0,4,16]],// "for x => x**2, [[1,2,3,4],[5,6,7,8,9],[0,2,4]]" );
  )