12       	 <--SHAPES
12       	 <--LINES
id1
2       	 <--TYPE
210       	 <--LEFT
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
223       	 <--LEFT
612       	 <--TOP
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
183       	 <--LEFT
178       	 <--TOP
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
194       	 <--LEFT
237       	 <--TOP
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
186       	 <--LEFT
287       	 <--TOP
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
170       	 <--LEFT
127       	 <--TOP
167       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
kvadratlariCemi
0
ededinTamReqemleri
id13
0       	 <--TYPE
84       	 <--LEFT
400       	 <--TOP
323       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
kvadratlariCemi
reqem
kvadratlariCemi
id3
92       	 <--TYPE
202       	 <--LEFT
456       	 <--TOP
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
109       	 <--LEFT
539       	 <--TOP
324       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin reqemlerinin kvadratlari cemi:
kvadratlariCemi

id4
0       	 <--TYPE
436       	 <--LEFT
240       	 <--TOP
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

id7
0       	 <--TYPE
196       	 <--LEFT
343       	 <--TOP
123       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
POWER
reqem
2
reqem
id5
3       	 <--TYPE
485       	 <--LEFT
481       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id12,id9
reserved 1

id9,id10
reserved 1

id10,id11
reserved 1

id13,id3
reserved 1

id3,id6
reserved 1
EVET
id4,id10
reserved 1

id6,id2
reserved 1

id1,id12
reserved 1

id11,id7
reserved 1

id7,id13
reserved 1

id3,id5
reserved 1
HAYIR
id5,id4
reserved 1

