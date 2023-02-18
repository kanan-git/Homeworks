28       	 <--SHAPES
32       	 <--LINES
id1
2       	 <--TYPE
477       	 <--LEFT
106       	 <--TOP
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
384       	 <--LEFT
712       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
91       	 <--TYPE
138       	 <--LEFT
205       	 <--TOP
135       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
I ededi daxil edin:
A

id4
91       	 <--TYPE
333       	 <--LEFT
204       	 <--TOP
140       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
II ededi daxil edin:
B

id5
0       	 <--TYPE
131       	 <--LEFT
329       	 <--TOP
146       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
B
bolenler
qaliq
id6
0       	 <--TYPE
164       	 <--LEFT
156       	 <--TOP
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

id7
92       	 <--TYPE
148       	 <--LEFT
375       	 <--TOP
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

id8
0       	 <--TYPE
339       	 <--LEFT
503       	 <--TOP
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
id9
0       	 <--TYPE
148       	 <--LEFT
107       	 <--TOP
118       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
bolenlerinSayi
0

id10
0       	 <--TYPE
99       	 <--LEFT
448       	 <--TOP
209       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
bolenlerinSayi
1
bolenlerinSayi
id11
92       	 <--TYPE
128       	 <--LEFT
573       	 <--TOP
145       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_LESS_EQUAL
bolenlerinSayi
2

id12
91       	 <--TYPE
121       	 <--LEFT
651       	 <--TOP
157       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
En boyuk sade eded:
B

id13
0       	 <--TYPE
508       	 <--LEFT
504       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
SUBTRACT
B
1
B
id14
3       	 <--TYPE
80       	 <--LEFT
394       	 <--TOP
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
80       	 <--LEFT
515       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id16
3       	 <--TYPE
406       	 <--LEFT
339       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id33
92       	 <--TYPE
487       	 <--LEFT
573       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_LESS
B
A

id35
92       	 <--TYPE
146       	 <--LEFT
494       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
bolenler
B

id18
3       	 <--TYPE
662       	 <--LEFT
592       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id19
91       	 <--TYPE
552       	 <--LEFT
708       	 <--TOP
228       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Sade eded yoxdur:
sadeEdedYoxdur

id20
0       	 <--TYPE
301       	 <--LEFT
106       	 <--TOP
133       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
sadeEdedYoxdur
0

id17
0       	 <--TYPE
485       	 <--LEFT
330       	 <--TOP
118       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
bolenlerinSayi
0

id21
0       	 <--TYPE
501       	 <--LEFT
437       	 <--TOP
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

id22
92       	 <--TYPE
149       	 <--LEFT
259       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
B
A

id23
91       	 <--TYPE
-39       	 <--LEFT
706       	 <--TOP
229       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
II eded I ededden boyuk olmalidir !
B

id24
3       	 <--TYPE
397       	 <--LEFT
279       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id25
3       	 <--TYPE
71       	 <--LEFT
279       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id26
3       	 <--TYPE
415       	 <--LEFT
667       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id9,id6
reserved 1

id6,id3
reserved 1

id3,id4
reserved 1

id5,id7
reserved 1

id7,id10
reserved 1
EVET
id14,id15
reserved 1

id7,id14
reserved 1
HAYIR
id10,id35
reserved 1

id15,id35
reserved 1

id8,id16
reserved 1

id16,id5
reserved 1

id35,id11
reserved 1
EVET
id35,id8
reserved 1
HAYIR
id11,id12
reserved 1
EVET
id33,id18
reserved 1
EVET
id18,id19
reserved 1

id19,id2
reserved 1

id33,id13
reserved 1
HAYIR
id1,id20
reserved 1

id20,id9
reserved 1

id11,id33
reserved 1
HAYIR
id13,id21
reserved 1

id21,id17
reserved 1

id17,id16
reserved 1

id22,id5
reserved 1
EVET
id4,id24
reserved 1

id24,id22
reserved 1

id22,id25
reserved 1
HAYIR
id12,id26
reserved 1

id26,id2
reserved 1

id23,id2
reserved 1

id25,id23
reserved 1

