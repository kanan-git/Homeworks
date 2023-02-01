11       	 <--SHAPES
11       	 <--LINES
id1
2       	 <--TYPE
179       	 <--LEFT
80       	 <--TOP
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
174       	 <--LEFT
551       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
255       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id9
91       	 <--TYPE
149       	 <--LEFT
226       	 <--TOP
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

id10
0       	 <--TYPE
168       	 <--LEFT
129       	 <--TOP
89       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN


ededler
id11
0       	 <--TYPE
142       	 <--LEFT
337       	 <--TOP
137       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededler
A
ededler
id12
0       	 <--TYPE
167       	 <--LEFT
178       	 <--TOP
91       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
ededSayi
0

id13
92       	 <--TYPE
154       	 <--LEFT
392       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
ededSayi
3

id14
0       	 <--TYPE
134       	 <--LEFT
288       	 <--TOP
155       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
ededSayi
1
ededSayi
id3
91       	 <--TYPE
116       	 <--LEFT
478       	 <--TOP
188       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Daxil edilen ededler:
ededler

id4
0       	 <--TYPE
350       	 <--LEFT
230       	 <--TOP
137       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededler
, 
ededler
id5
3       	 <--TYPE
415       	 <--LEFT
411       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id1,id10
reserved 1

id10,id12
reserved 1

id12,id9
reserved 1

id11,id13
reserved 1

id13,id3
reserved 1
EVET
id3,id2
reserved 1

id4,id9
reserved 1

id13,id5
reserved 1
HAYIR
id5,id4
reserved 1

id9,id14
reserved 1

id14,id11
reserved 1

