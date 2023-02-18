20       	 <--SHAPES
15       	 <--LINES
id1
2       	 <--TYPE
372       	 <--LEFT
75       	 <--TOP
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
291       	 <--LEFT
700       	 <--TOP
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
614       	 <--LEFT
381       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16776960       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id4
3       	 <--TYPE
176       	 <--LEFT
385       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16776960       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id5
3       	 <--TYPE
788       	 <--LEFT
539       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16711808       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id6
3       	 <--TYPE
715       	 <--LEFT
201       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16711808       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id8
3       	 <--TYPE
403       	 <--LEFT
702       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id13
91       	 <--TYPE
332       	 <--LEFT
138       	 <--TOP
149       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Eded daxil edin:
eded

id14
0       	 <--TYPE
304       	 <--LEFT
202       	 <--TOP
204       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
eded
10
ededinReqemleri
id17
0       	 <--TYPE
337       	 <--LEFT
256       	 <--TOP
138       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVINT
eded
10
tamHisse
id19
0       	 <--TYPE
277       	 <--LEFT
311       	 <--TOP
258       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
tamHisse
10
ededinSonrakiReqemi
id20
92       	 <--TYPE
265       	 <--LEFT
364       	 <--TOP
280       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER_EQUAL
ededinReqemleri
ededinSonrakiReqemi

id21
91       	 <--TYPE
208       	 <--LEFT
639       	 <--TOP
300       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Ededin en boyuk reqemi:
ededinEnBoyukReqemi

id22
92       	 <--TYPE
334       	 <--LEFT
566       	 <--TOP
114       	 <--WIDTH
50       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
tamHisse
0

id23
0       	 <--TYPE
50       	 <--LEFT
472       	 <--TOP
259       	 <--WIDTH
30       	 <--HEIGHT
0       	 <--BACKCOLOR
16776960       	 <--BORDERCOLOR
16776960       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
ededinEnBoyukReqemi
ededinReqemleri

id24
0       	 <--TYPE
476       	 <--LEFT
473       	 <--TOP
287       	 <--WIDTH
30       	 <--HEIGHT
0       	 <--BACKCOLOR
16776960       	 <--BORDERCOLOR
16776960       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
ededinEnBoyukReqemi
ededinSonrakiReqemi

id25
0       	 <--TYPE
724       	 <--LEFT
372       	 <--TOP
115       	 <--WIDTH
30       	 <--HEIGHT
16711808       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
16777215       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
eded
tamHisse

id7
92       	 <--TYPE
256       	 <--LEFT
509       	 <--TOP
279       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
ededinEnBoyukReqemi
ededinReqemleri

id9
92       	 <--TYPE
568       	 <--LEFT
590       	 <--TOP
307       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
ededinEnBoyukReqemi
ededinSonrakiReqemi

id10
3       	 <--TYPE
382       	 <--LEFT
700       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id22,id21
reserved 1
EVET
id1,id13
reserved 1

id13,id14
reserved 1

id14,id17
reserved 1

id17,id19
reserved 1

id19,id20
reserved 1

id20,id4
reserved 1
EVET
id20,id3
reserved 1
HAYIR
id22,id5
reserved 1
HAYIR
id6,id14
reserved 1

id5,id25
reserved 1

id25,id6
reserved 1

id21,id2
reserved 1

id4,id23
reserved 1

id3,id24
reserved 1

