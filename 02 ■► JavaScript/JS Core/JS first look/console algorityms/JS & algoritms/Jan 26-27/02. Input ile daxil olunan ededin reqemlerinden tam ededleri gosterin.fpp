11       	 <--SHAPES
11       	 <--LINES
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
213       	 <--LEFT
552       	 <--TOP
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
175       	 <--LEFT
125       	 <--TOP
167       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN


ededinTamReqemleri
id13
0       	 <--TYPE
106       	 <--LEFT
343       	 <--TOP
323       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinTamReqemleri
reqem
ededinTamReqemleri
id3
92       	 <--TYPE
195       	 <--LEFT
400       	 <--TOP
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
129       	 <--LEFT
482       	 <--TOP
276       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin tam reqemleri:
ededinTamReqemleri

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

id5
0       	 <--TYPE
398       	 <--LEFT
416       	 <--TOP
290       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinTamReqemleri
,
ededinTamReqemleri
  
---- LINES ---- from,to ----
id1,id12
reserved 1

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

id3,id6
reserved 1
EVET
id4,id10
reserved 1

id6,id2
reserved 1

id3,id5
reserved 1
HAYIR
id5,id4
reserved 1

