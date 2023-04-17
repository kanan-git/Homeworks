14       	 <--SHAPES
15       	 <--LINES
id1
2       	 <--TYPE
326       	 <--LEFT
82       	 <--TOP
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
567       	 <--LEFT
535       	 <--TOP
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
510       	 <--LEFT
465       	 <--TOP
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
146       	 <--LEFT
144       	 <--TOP
153       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Enter the start value:
S

id5
91       	 <--TYPE
148       	 <--LEFT
210       	 <--TOP
150       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Enter the end value:
E

id6
0       	 <--TYPE
480       	 <--LEFT
381       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
S
1
S
id7
92       	 <--TYPE
318       	 <--LEFT
446       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER_EQUAL
S
E

id8
0       	 <--TYPE
171       	 <--LEFT
278       	 <--TOP
104       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
S
2
Mod
id9
92       	 <--TYPE
166       	 <--LEFT
372       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
Mod
0

id10
0       	 <--TYPE
321       	 <--LEFT
382       	 <--TOP
106       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
Sum
S
Sum
id11
0       	 <--TYPE
189       	 <--LEFT
82       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
Sum
0

id12
3       	 <--TYPE
510       	 <--LEFT
288       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id13
3       	 <--TYPE
216       	 <--LEFT
466       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id14
91       	 <--TYPE
213       	 <--LEFT
531       	 <--TOP
321       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Sum of even values between Start & End inputs:
Sum

  
---- LINES ---- from,to ----
id1,id11
reserved 1

id11,id4
reserved 1

id4,id5
reserved 1

id5,id8
reserved 1

id9,id10
reserved 1
EVET
id9,id13
reserved 1
HAYIR
id13,id7
reserved 1

id14,id2
reserved 1

id10,id7
reserved 1

id7,id14
reserved 1
EVET
id7,id3
reserved 1
HAYIR
id3,id6
reserved 1

id6,id12
reserved 1

id12,id8
reserved 1

id8,id9
reserved 1

