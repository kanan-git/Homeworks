13       	 <--SHAPES
14       	 <--LINES
id1
2       	 <--TYPE
455       	 <--LEFT
78       	 <--TOP
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
631       	 <--LEFT
624       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id14
0       	 <--TYPE
455       	 <--LEFT
141       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
input
1

id15
91       	 <--TYPE
608       	 <--LEFT
137       	 <--TOP
124       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
eded daxil edin
a

id16
0       	 <--TYPE
613       	 <--LEFT
465       	 <--TOP
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
id17
0       	 <--TYPE
606       	 <--LEFT
227       	 <--TOP
125       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
input
2
mod
id18
92       	 <--TYPE
613       	 <--LEFT
299       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
mod
0

id20
92       	 <--TYPE
611       	 <--LEFT
530       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_LESS_EQUAL
input
a

id21
3       	 <--TYPE
416       	 <--LEFT
548       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id22
3       	 <--TYPE
884       	 <--LEFT
320       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id23
3       	 <--TYPE
884       	 <--LEFT
475       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id24
3       	 <--TYPE
417       	 <--LEFT
237       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id3
91       	 <--TYPE
511       	 <--LEFT
391       	 <--TOP
312       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
1 den daxil edilen edede kimi olan cut ededler
input

  
---- LINES ---- from,to ----
id18,id22
reserved 1
HAYIR
id22,id23
reserved 1

id23,id16
reserved 1

id21,id24
reserved 1

id24,id17
reserved 1

id1,id14
reserved 1

id14,id15
reserved 1

id15,id17
reserved 1

id17,id18
reserved 1

id16,id20
reserved 1

id20,id21
reserved 1
EVET
id20,id2
reserved 1
HAYIR
id18,id3
reserved 1
EVET
id3,id16
reserved 1

