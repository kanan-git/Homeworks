18       	 <--SHAPES
20       	 <--LINES
id1
2       	 <--TYPE
232       	 <--LEFT
100       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
2       	 <--TYPE
601       	 <--LEFT
564       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id4
91       	 <--TYPE
311       	 <--LEFT
218       	 <--TOP
127       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Eded daxil edin:
A

id5
0       	 <--TYPE
318       	 <--LEFT
162       	 <--TOP
116       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
EdedlerinSayi
1

id6
0       	 <--TYPE
272       	 <--LEFT
562       	 <--TOP
205       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
EdedlerinSayi
1
EdedlerinSayi
id7
92       	 <--TYPE
307       	 <--LEFT
481       	 <--TOP
136       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
EdedlerinSayi
5

id12
3       	 <--TYPE
201       	 <--LEFT
232       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id3
0       	 <--TYPE
490       	 <--LEFT
349       	 <--TOP
105       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
A
7
qaliq
id8
92       	 <--TYPE
319       	 <--LEFT
340       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
qaliq
0

id10
0       	 <--TYPE
308       	 <--LEFT
425       	 <--TOP
135       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
counter
1
counter
id13
0       	 <--TYPE
337       	 <--LEFT
101       	 <--TOP
81       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
counter
0

id14
91       	 <--TYPE
511       	 <--LEFT
486       	 <--TOP
251       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
daxil edilen 7-e bolunen ededler
counter

id11
3       	 <--TYPE
201       	 <--LEFT
572       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id9
3       	 <--TYPE
234       	 <--LEFT
358       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id15
3       	 <--TYPE
235       	 <--LEFT
500       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id16
92       	 <--TYPE
318       	 <--LEFT
278       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
A
0

id17
3       	 <--TYPE
234       	 <--LEFT
296       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id18
3       	 <--TYPE
538       	 <--LEFT
298       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id12,id4
reserved 1

id5,id4
reserved 1

id1,id13
reserved 1

id13,id5
reserved 1

id3,id8
reserved 1

id7,id6
reserved 1
HAYIR
id6,id11
reserved 1

id11,id12
reserved 1

id7,id14
reserved 1
EVET
id14,id2
reserved 1

id8,id10
reserved 1
EVET
id10,id7
reserved 1

id8,id9
reserved 1
HAYIR
id9,id15
reserved 1

id15,id7
reserved 1

id4,id16
reserved 1

id16,id17
reserved 1
EVET
id17,id9
reserved 1

id16,id18
reserved 1
HAYIR
id18,id3
reserved 1

