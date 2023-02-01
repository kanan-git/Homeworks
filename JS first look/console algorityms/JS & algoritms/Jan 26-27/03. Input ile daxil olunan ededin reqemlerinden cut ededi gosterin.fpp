18       	 <--SHAPES
20       	 <--LINES
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
202       	 <--LEFT
691       	 <--TOP
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


ededinCutReqemleri
id13
0       	 <--TYPE
103       	 <--LEFT
471       	 <--TOP
323       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinCutReqemleri
reqem
ededinCutReqemleri
id3
92       	 <--TYPE
193       	 <--LEFT
528       	 <--TOP
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
120       	 <--LEFT
619       	 <--TOP
276       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin cut reqemleri:
ededinCutReqemleri

id4
0       	 <--TYPE
599       	 <--LEFT
251       	 <--TOP
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
531       	 <--LEFT
531       	 <--TOP
290       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinCutReqemleri
,
ededinCutReqemleri
id7
0       	 <--TYPE
185       	 <--LEFT
331       	 <--TOP
136       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
reqem
2
qaliq
id8
92       	 <--TYPE
181       	 <--LEFT
394       	 <--TOP
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

id14
3       	 <--TYPE
87       	 <--LEFT
404       	 <--TOP
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
557       	 <--TOP
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
381       	 <--LEFT
538       	 <--TOP
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

id17
3       	 <--TYPE
464       	 <--LEFT
466       	 <--TOP
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
641       	 <--LEFT
460       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id1,id12
reserved 1

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

id11,id7
reserved 1

id7,id8
reserved 1

id8,id13
reserved 1
EVET
id8,id14
reserved 1
HAYIR
id14,id15
reserved 1

id15,id3
reserved 1

id3,id16
reserved 1
HAYIR
id16,id5
reserved 1
EVET
id16,id17
reserved 1
HAYIR
id17,id18
reserved 1

id18,id4
reserved 1

id5,id18
reserved 1

