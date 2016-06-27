var atoms = { 
  CARBON: 
    [ 
      [ -400, 0, -200 ], //[x, y, z]
      [ 100, 0, -200 ],
      [ -545, 250, 190 ],
      [ -920, 540, 110 ],
      [ -1000, 770, 520 ],
      [ -1300, 260, 20 ]
    ],
  HYDROGEN:
    [
      [ -515, 185, -480 ],
      [ 690.711, -335.624, -200 ],
      [ -370, -590, 85 ],
      [ -370, -590, -485 ],
      [ -625, 35, 460 ],
      [ -860, 720, -200 ],
      [ -273, 454, 320 ],
      [ -1300, 960, 520 ],
      [ -1000, 560, 820 ],
      [ -690, 950, 545 ]
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
        [ -100, 0, -200, 0, 0, Math.PI/2 ], //x,y,z,x,y,z
        [ -450, 75, -75, Math.PI/3.2, 0, Math.PI/10.2 ],
        [ -667, 342, 162, -Math.PI/12, 0, Math.PI/3.5 ],
        [ -940, 610, 240, Math.PI/3, 0, -Math.PI/1.06 ],
        [ -1040, 445, 80, Math.PI/10, 0, -Math.PI/3.4 ]
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
        [ -580, 155, 310, -Math.PI/3.4, 0, -Math.PI/16 ],
        [ -895, 615, -25, -Math.PI/3, 0, Math.PI/1.05 ],
        [ -427, 340, 245, Math.PI/6, 0, -Math.PI/3.7 ],
        [ -1130, 850, 520, 0, 0, Math.PI/3.2 ],
        [ -1000, 680, 650, -Math.PI/3.2, 0, 0 ],
        [ -865, 850, 530, -Math.PI/2.2, -Math.PI/5.8, Math.PI/2 ]

      ],
    HYDROGEN:  
      [
        [ -466, 101, -360, -Math.PI/3.2, 0, -15*Math.PI/16.8 ],
        [ 542.711, -381.909, -200, 0, 0, 109.5 * Math.PI/180 ],
        [ -450, -537, -35, 2*Math.PI/3.2, 0, 5*Math.PI/6.0 ],
        [ -450, -537, -359, -2*Math.PI/3.2, 0, 11*Math.PI/6.0 ],
        [ -590, 125, 348, -Math.PI/3.4, 0, -Math.PI/16 ],
        [ -888, 638, -67, -Math.PI/3, 0, Math.PI/1.05 ],
        [ -390, 369, 262, Math.PI/6, 0, -Math.PI/3.7 ],
        [ -1171, 879, 520, 0, 0, Math.PI/3.2 ],
        [ -1000, 652, 692, -Math.PI/3.2, 0, 0 ],
        [ -822, 875, 534, -Math.PI/2.2, -Math.PI/5.8, Math.PI/2 ]
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