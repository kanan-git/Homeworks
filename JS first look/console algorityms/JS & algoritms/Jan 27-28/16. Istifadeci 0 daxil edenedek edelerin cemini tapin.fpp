11       	 <--SHAPES
11       	 <--LINES
id1
2       	 <--TYPE
179       	 <--LEFT
83       	 <--TOP
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
185       	 <--LEFT
463       	 <--TOP
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
97       	 <--LEFT
263       	 <--TOP
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
97       	 <--LEFT
414       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16776960       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id7
3       	 <--TYPE
319       	 <--LEFT
338       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id8
3       	 <--TYPE
318       	 <--LEFT
200       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id9
91       	 <--TYPE
156       	 <--LEFT
184       	 <--TOP
114       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Enter a value:
A

id10
0       	 <--TYPE
179       	 <--LEFT
133       	 <--TOP
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

id11
92       	 <--TYPE
156       	 <--LEFT
245       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
A
0

id12
0       	 <--TYPE
160       	 <--LEFT
329       	 <--TOP
104       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
Sum
A
Sum
id13
91       	 <--TYPE
128       	 <--LEFT
398       	 <--TOP
186       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Sum of entered values:
Sum

  
---- LINES ---- from,to ----
id1,id10
reserved 1

id10,id9
reserved 1

id9,id11
reserved 1

id11,id3
reserved 1
EVET
id3,id4
reserved 1

id11,id12
reserved 1
HAYIR
id4,id13
reserved 1

id13,id2
reserved 1

id12,id7
reserved 1

id7,id8
reserved 1

id8,id9
reserved 1

