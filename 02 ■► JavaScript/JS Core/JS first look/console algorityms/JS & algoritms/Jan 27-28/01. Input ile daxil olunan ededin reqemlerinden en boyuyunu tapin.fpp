19       	 <--SHAPES
21       	 <--LINES
id1
2       	 <--TYPE
290       	 <--LEFT
80       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
91       	 <--TYPE
143       	 <--LEFT
128       	 <--TOP
148       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Eded daxil edin:
input

id3
0       	 <--TYPE
182       	 <--LEFT
79       	 <--TOP
71       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
tester
9

id4
0       	 <--TYPE
148       	 <--LEFT
236       	 <--TOP
134       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
input
10
qaliq
id5
0       	 <--TYPE
163       	 <--LEFT
287       	 <--TOP
104       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVINT
input
10
tam
id6
92       	 <--TYPE
159       	 <--LEFT
339       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
qaliq
tester

id7
2       	 <--TYPE
178       	 <--LEFT
657       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id8
91       	 <--TYPE
112       	 <--LEFT
586       	 <--TOP
201       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin en boyuk reqemi:
qaliq

id9
3       	 <--TYPE
77       	 <--LEFT
357       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id10
3       	 <--TYPE
77       	 <--LEFT
602       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id11
0       	 <--TYPE
354       	 <--LEFT
432       	 <--TOP
110       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVINT
input
10
input
id12
92       	 <--TYPE
159       	 <--LEFT
422       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
tam
0

id13
3       	 <--TYPE
403       	 <--LEFT
246       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id14
0       	 <--TYPE
352       	 <--LEFT
514       	 <--TOP
112       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
SUBTRACT
tester
1
tester
id15
92       	 <--TYPE
158       	 <--LEFT
504       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
tester
0

id16
3       	 <--TYPE
540       	 <--LEFT
525       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id17
3       	 <--TYPE
541       	 <--LEFT
247       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id18
0       	 <--TYPE
143       	 <--LEFT
186       	 <--TOP
146       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
baslangicDeyer
input

id19
0       	 <--TYPE
472       	 <--LEFT
372       	 <--TOP
146       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
input
baslangicDeyer

  
---- LINES ---- from,to ----
id6,id9
reserved 1
EVET
id10,id8
reserved 1

id8,id7
reserved 1

id4,id5
reserved 1

id5,id6
reserved 1

id6,id12
reserved 1
HAYIR
id9,id10
reserved 1

id12,id11
reserved 1
HAYIR
id11,id13
reserved 1

id13,id4
reserved 1

id17,id13
reserved 1

id16,id19
reserved 1

id19,id17
reserved 1

id1,id3
reserved 1

id3,id2
reserved 1

id2,id18
reserved 1

id18,id4
reserved 1

id12,id15
reserved 1
EVET
id15,id8
reserved 1
EVET
id15,id14
reserved 1
HAYIR
id14,id16
reserved 1

