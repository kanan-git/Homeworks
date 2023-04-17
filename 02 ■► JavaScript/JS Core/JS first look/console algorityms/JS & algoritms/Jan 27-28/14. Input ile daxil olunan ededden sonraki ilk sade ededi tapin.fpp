19       	 <--SHAPES
21       	 <--LINES
id1
2       	 <--TYPE
295       	 <--LEFT
76       	 <--TOP
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
500       	 <--LEFT
601       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
255       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
3       	 <--TYPE
336       	 <--LEFT
486       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16776960       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id7
3       	 <--TYPE
445       	 <--LEFT
562       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id9
91       	 <--TYPE
114       	 <--LEFT
71       	 <--TOP
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

id10
0       	 <--TYPE
396       	 <--LEFT
181       	 <--TOP
107       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
input
1
input
id11
0       	 <--TYPE
112       	 <--LEFT
278       	 <--TOP
151       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
input
bolen
qaliq
id12
92       	 <--TYPE
130       	 <--LEFT
329       	 <--TOP
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

id13
0       	 <--TYPE
128       	 <--LEFT
227       	 <--TOP
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

id14
0       	 <--TYPE
151       	 <--LEFT
181       	 <--TOP
71       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
bolen
1

id15
0       	 <--TYPE
81       	 <--LEFT
411       	 <--TOP
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
id16
92       	 <--TYPE
129       	 <--LEFT
467       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
bolen
input

id17
3       	 <--TYPE
72       	 <--LEFT
348       	 <--TOP
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
72       	 <--LEFT
488       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id19
92       	 <--TYPE
112       	 <--LEFT
542       	 <--TOP
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

id20
91       	 <--TYPE
306       	 <--LEFT
596       	 <--TOP
138       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ilk sade eded:
input

id21
0       	 <--TYPE
284       	 <--LEFT
277       	 <--TOP
115       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
bolen
1
bolen
id22
3       	 <--TYPE
179       	 <--LEFT
611       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id4
0       	 <--TYPE
134       	 <--LEFT
133       	 <--TOP
107       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
input
1
input
  
---- LINES ---- from,to ----
id14,id13
reserved 1

id11,id12
reserved 1

id12,id15
reserved 1
EVET
id15,id16
reserved 1

id12,id17
reserved 1
HAYIR
id17,id18
reserved 1

id18,id16
reserved 1

id16,id19
reserved 1
EVET
id19,id7
reserved 1
HAYIR
id21,id11
reserved 1

id13,id11
reserved 1

id19,id22
reserved 1
EVET
id22,id20
reserved 1

id20,id2
reserved 1

id7,id10
reserved 1

id16,id3
reserved 1
HAYIR
id3,id21
reserved 1

id10,id14
reserved 1

id1,id9
reserved 1

id9,id4
reserved 1

id4,id14
reserved 1

