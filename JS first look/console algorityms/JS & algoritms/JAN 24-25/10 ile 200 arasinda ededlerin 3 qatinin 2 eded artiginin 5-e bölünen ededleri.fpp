14       	 <--SHAPES
15       	 <--LINES
id1
2       	 <--TYPE
228       	 <--LEFT
93       	 <--TOP
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
540       	 <--LEFT
637       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
3       	 <--TYPE
709       	 <--LEFT
285       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id4
91       	 <--TYPE
171       	 <--LEFT
145       	 <--TOP
185       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
baslangic ededi daxil edin
B

id5
91       	 <--TYPE
173       	 <--LEFT
209       	 <--TOP
179       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
sonuncu ededi daxil edin
S

id6
0       	 <--TYPE
218       	 <--LEFT
274       	 <--TOP
87       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MULTIPLY
B
3
rule
id7
0       	 <--TYPE
214       	 <--LEFT
333       	 <--TOP
95       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
rule
2
rule
id9
0       	 <--TYPE
202       	 <--LEFT
384       	 <--TOP
119       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
rule
5
mod
id8
92       	 <--TYPE
204       	 <--LEFT
458       	 <--TOP
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

id10
91       	 <--TYPE
118       	 <--LEFT
554       	 <--TOP
283       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
intervaldaki (3x+2)/5 shertini odeyen ededler
B

id11
92       	 <--TYPE
520       	 <--LEFT
550       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_LESS
B
S

id12
0       	 <--TYPE
679       	 <--LEFT
369       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
B
1
B
id13
3       	 <--TYPE
708       	 <--LEFT
570       	 <--TOP
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
572       	 <--LEFT
479       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



  
---- LINES ---- from,to ----
id1,id4
reserved 1

id4,id5
reserved 1

id5,id6
reserved 1

id6,id7
reserved 1

id7,id9
reserved 1

id10,id11
reserved 1

id3,id6
reserved 1

id11,id13
reserved 1
EVET
id11,id2
reserved 1
HAYIR
id9,id8
reserved 1

id8,id10
reserved 1
EVET
id13,id12
reserved 1

id12,id3
reserved 1

id8,id14
reserved 1
HAYIR
id14,id11
reserved 1

