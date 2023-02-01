17       	 <--SHAPES
19       	 <--LINES
id1
2       	 <--TYPE
427       	 <--LEFT
133       	 <--TOP
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
618       	 <--LEFT
565       	 <--TOP
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
185       	 <--LEFT
292       	 <--TOP
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


ededinMreqemleri
id13
0       	 <--TYPE
92       	 <--LEFT
418       	 <--TOP
323       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinMreqemleri
reqem
ededinMreqemleri
id3
92       	 <--TYPE
201       	 <--LEFT
477       	 <--TOP
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
96       	 <--LEFT
578       	 <--TOP
356       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin mukemmel eded olan reqemleri:
ededinMreqemleri

id4
0       	 <--TYPE
679       	 <--LEFT
235       	 <--TOP
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
615       	 <--LEFT
488       	 <--TOP
290       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
JOIN
ededinMreqemleri
,
ededinMreqemleri
id8
92       	 <--TYPE
209       	 <--LEFT
338       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
reqem
6

id7
3       	 <--TYPE
84       	 <--LEFT
347       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id14
3       	 <--TYPE
64       	 <--LEFT
504       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id15
92       	 <--TYPE
427       	 <--LEFT
490       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
reqem
6

id16
3       	 <--TYPE
499       	 <--LEFT
435       	 <--TOP
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
762       	 <--LEFT
431       	 <--TOP
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

id4,id10
reserved 1

id6,id2
reserved 1

id11,id8
reserved 1

id8,id13
reserved 1
EVET
id8,id7
reserved 1
HAYIR
id7,id14
reserved 1

id14,id3
reserved 1

id3,id15
reserved 1
HAYIR
id15,id5
reserved 1
EVET
id15,id16
reserved 1
HAYIR
id16,id17
reserved 1

id5,id17
reserved 1

id17,id4
reserved 1

id3,id6
reserved 1
EVET
