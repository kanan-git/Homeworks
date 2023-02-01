16       	 <--SHAPES
16       	 <--LINES
id1
2       	 <--TYPE
212       	 <--LEFT
73       	 <--TOP
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
229       	 <--LEFT
760       	 <--TOP
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
193       	 <--LEFT
220       	 <--TOP
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
189       	 <--LEFT
280       	 <--TOP
121       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
A
10
reqem
id11
0       	 <--TYPE
202       	 <--LEFT
333       	 <--TOP
115       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVINT
A
10
tamHisse
id12
0       	 <--TYPE
164       	 <--LEFT
172       	 <--TOP
167       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN


ededinTersi
id13
0       	 <--TYPE
88       	 <--LEFT
387       	 <--TOP
323       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinTersi
reqem
ededinTersi
id3
92       	 <--TYPE
201       	 <--LEFT
438       	 <--TOP
114       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
tamHisse
0

id6
91       	 <--TYPE
114       	 <--LEFT
704       	 <--TOP
276       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin tersi:
ededinTersi

id4
0       	 <--TYPE
440       	 <--LEFT
273       	 <--TOP
93       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
A
tamHisse

id14
0       	 <--TYPE
151       	 <--LEFT
509       	 <--TOP
200       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
ededinTersi
ededinTersi
cem
id15
0       	 <--TYPE
192       	 <--LEFT
659       	 <--TOP
138       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVIDE
cem
2
ededinTersi
id5
0       	 <--TYPE
193       	 <--LEFT
121       	 <--TOP
123       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
reqemlerinSayi
0

id8
0       	 <--TYPE
403       	 <--LEFT
458       	 <--TOP
219       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
reqemlerinSayi
1
reqemlerinSayi
id7
91       	 <--TYPE
121       	 <--LEFT
604       	 <--TOP
257       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin reqemlerinin sayi:
reqemlerinSayi

id16
0       	 <--TYPE
150       	 <--LEFT
557       	 <--TOP
219       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
reqemlerinSayi
1
reqemlerinSayi
  
---- LINES ---- from,to ----
id12,id9
reserved 1

id9,id10
reserved 1

id10,id11
reserved 1

id11,id13
reserved 1

id13,id3
reserved 1

id4,id10
reserved 1

id6,id2
reserved 1

id1,id5
reserved 1

id5,id12
reserved 1

id3,id8
reserved 1
HAYIR
id15,id6
reserved 1

id3,id14
reserved 1
EVET
id8,id4
reserved 1

id14,id16
reserved 1

id16,id7
reserved 1

id7,id15
reserved 1

