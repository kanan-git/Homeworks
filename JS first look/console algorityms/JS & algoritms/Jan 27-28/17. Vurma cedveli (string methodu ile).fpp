22       	 <--SHAPES
23       	 <--LINES
id1
2       	 <--TYPE
439       	 <--LEFT
74       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
65280       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
2       	 <--TYPE
362       	 <--LEFT
706       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
255       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
0       	 <--TYPE
168       	 <--LEFT
172       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
vuruq
1

id4
0       	 <--TYPE
158       	 <--LEFT
126       	 <--TOP
90       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
reqemler
1

id5
0       	 <--TYPE
115       	 <--LEFT
218       	 <--TOP
174       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MULTIPLY
reqemler
vuruq
hasil
id6
92       	 <--TYPE
145       	 <--LEFT
553       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
vuruq
10

id8
3       	 <--TYPE
354       	 <--LEFT
573       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id9
0       	 <--TYPE
303       	 <--LEFT
218       	 <--TOP
113       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
vuruq
1
vuruq
id10
92       	 <--TYPE
339       	 <--LEFT
619       	 <--TOP
117       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
reqemler
10

id11
3       	 <--TYPE
527       	 <--LEFT
640       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id12
0       	 <--TYPE
455       	 <--LEFT
171       	 <--TOP
153       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
reqemler
1
reqemler
id7
0       	 <--TYPE
329       	 <--LEFT
74       	 <--TOP
82       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN


cedvel
id14
0       	 <--TYPE
129       	 <--LEFT
451       	 <--TOP
144       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
cedvel
hasil
cedvel
id15
0       	 <--TYPE
117       	 <--LEFT
263       	 <--TOP
167       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
cedvel
reqemler
cedvel
id16
0       	 <--TYPE
137       	 <--LEFT
309       	 <--TOP
128       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
cedvel
 x 
cedvel
id17
0       	 <--TYPE
136       	 <--LEFT
405       	 <--TOP
130       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
cedvel
 = 
cedvel
id18
0       	 <--TYPE
127       	 <--LEFT
358       	 <--TOP
147       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
cedvel
vuruq
cedvel
id19
91       	 <--TYPE
156       	 <--LEFT
498       	 <--TOP
90       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT

cedvel

id20
0       	 <--TYPE
317       	 <--LEFT
402       	 <--TOP
82       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN


cedvel
id21
0       	 <--TYPE
490       	 <--LEFT
476       	 <--TOP
82       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN


cedvel
id22
91       	 <--TYPE
100       	 <--LEFT
623       	 <--TOP
200       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
-------------------------------------------


id23
91       	 <--TYPE
103       	 <--LEFT
70       	 <--TOP
200       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
-------------------------------------------


  
---- LINES ---- from,to ----
id6,id8
reserved 1
HAYIR
id9,id5
reserved 1

id4,id3
reserved 1

id3,id5
reserved 1

id10,id11
reserved 1
HAYIR
id12,id3
reserved 1

id15,id16
reserved 1

id16,id18
reserved 1

id18,id17
reserved 1

id17,id14
reserved 1

id14,id19
reserved 1

id5,id15
reserved 1

id19,id6
reserved 1

id1,id7
reserved 1

id8,id20
reserved 1

id20,id9
reserved 1

id11,id21
reserved 1

id21,id12
reserved 1

id6,id22
reserved 1
EVET
id22,id10
reserved 1

id7,id23
reserved 1

id23,id4
reserved 1

id10,id2
reserved 1
EVET
