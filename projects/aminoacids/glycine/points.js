var atoms = { 
  CARBON: 
    [ 
      [ -400, 0, -200 ], //[x, y, z]
      [ 100, 0, -200 ]
    ],
  HYDROGEN:
    [
      [ -515, 185, -480 ],
      [ 690.711, -335.624, -200 ],
      [ -370, -590, 85 ],
      [ -370, -590, -485 ],
      [ -515, 185, 90 ]
    ],
  OXYGEN: 
    [
      [ 290, 310, -200 ],
      [ 350, -431.335, -200 ]
    ],
  NITROGEN: 
    [
      [ -550, -470, -200 ]
    ]
 };

var bonds = {
  FULL: {
    CARBON: 
      [
        [ -100, 0, -200, 0, 0, Math.PI/2 ] //x,y,z,x,y,z
      ]
  },
  HALF: {
    CARBON: 
      [
        [ 180, -127.279, -200, 0, 0, 7*Math.PI/6 ],
        [ -440, -145, -200, 0, 0, -3.482 ]
      ],
    OXYGEN: 
      [
        [ 280, -299.813, -200, 0, 0, 7*Math.PI/6 ]
      ],
    NITROGEN: 
      [
        [ -506, -331, -200, 0, 0, -3.482 ]
      ]
  },
  DOUBLE: {
    CARBON: 
      [
        [ 150, 150, -200, 0, 0, -Math.PI/6 ],
        [ 220, 110, -200, 0, 0, -Math.PI/6 ]
      ],
    OXYGEN:
      [
        [ 175, 193, -200, 0, 0, -Math.PI/6 ],
        [ 245, 153, -200, 0, 0, -Math.PI/6 ]
      ]
  },
  HBOND: {
    CARBON: 
      [
        [ -450, 75, -320, -Math.PI/3.2, 0, -15*Math.PI/16.8 ],
        [ -450, 75, -75, Math.PI/3.2, 0, Math.PI/10.2 ]
      ],
    HYDROGEN:  
      [
        [ -466, 101, -360, -Math.PI/3.2, 0, -15*Math.PI/16.8 ],
        [ 542.711, -381.909, -200, 0, 0, 109.5 * Math.PI/180 ],
        [ -450, -537, -35, 2*Math.PI/3.2, 0, 5*Math.PI/6.0 ],
        [ -450, -537, -359, -2*Math.PI/3.2, 0, 11*Math.PI/6.0 ],
        [ -465, 101, -35, Math.PI/3.2, 0, Math.PI/10.2 ]
      ],
    OXYGEN:
      [
        [ 495.711, -398.909, -200, 0, 0, 109.5 * Math.PI/180 ],
      ],
    NITROGEN: 
      [
        [ -475, -520, -75, 2*Math.PI/3.2, 0, 5*Math.PI/6.0 ],
        [ -475, -520, -320, -2*Math.PI/3.2, 0, 11*Math.PI/6.0 ]
      ]
  }
};