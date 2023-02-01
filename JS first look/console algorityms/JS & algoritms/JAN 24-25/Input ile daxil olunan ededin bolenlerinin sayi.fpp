14       	 <--SHAPES
15       	 <--LINES
id1
2       	 <--TYPE
188       	 <--LEFT
87       	 <--TOP
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
568       	 <--LEFT
574       	 <--TOP
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
279       	 <--LEFT
201       	 <--TOP
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
301       	 <--LEFT
152       	 <--TOP
85       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
bolenler
1

id6
0       	 <--TYPE
270       	 <--LEFT
266       	 <--TOP
143       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
A
bolenler
qaliq
id7
0       	 <--TYPE
491       	 <--LEFT
267       	 <--TOP
143       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
bolenler
1
bolenler
id8
92       	 <--TYPE
284       	 <--LEFT
319       	 <--TOP
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

id9
91       	 <--TYPE
204       	 <--LEFT
569       	 <--TOP
271       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
daxil edilen ededin bolenlerinin sayi
counter

id10
92       	 <--TYPE
283       	 <--LEFT
477       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
bolenler
A

id11
3       	 <--TYPE
203       	 <--LEFT
339       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id12
3       	 <--TYPE
202       	 <--LEFT
497       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id13
3       	 <--TYPE
558       	 <--LEFT
495       	 <--TOP
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
183       	 <--LEFT
151       	 <--TOP
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
0       	 <--TYPE
272       	 <--LEFT
413       	 <--TOP
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
  
---- LINES ---- from,to ----
id11,id12
reserved 1

id12,id10
reserved 1

id8,id11
reserved 1
HAYIR
id13,id7
reserved 1

id7,id6
reserved 1

id10,id13
reserved 1
HAYIR
id5,id4
reserved 1

id4,id6
reserved 1

id6,id8
reserved 1

id8,id14
reserved 1
EVET
id14,id10
reserved 1

id10,id9
reserved 1
EVET
id9,id2
reserved 1

id1,id3
reserved 1

id3,id5
reserved 1

