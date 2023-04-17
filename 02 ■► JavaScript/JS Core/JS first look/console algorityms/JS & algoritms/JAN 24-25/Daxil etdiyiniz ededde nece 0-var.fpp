13       	 <--SHAPES
14       	 <--LINES
id1
2       	 <--TYPE
179       	 <--LEFT
99       	 <--TOP
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
636       	 <--LEFT
460       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id4
91       	 <--TYPE
151       	 <--LEFT
204       	 <--TOP
123       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
eded daxil edin
A

id3
0       	 <--TYPE
157       	 <--LEFT
269       	 <--TOP
112       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
A
10
qaliq
id5
92       	 <--TYPE
156       	 <--LEFT
378       	 <--TOP
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

id6
0       	 <--TYPE
173       	 <--LEFT
152       	 <--TOP
79       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
saygac
0

id7
0       	 <--TYPE
146       	 <--LEFT
462       	 <--TOP
131       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
saygac
1
saygac
id8
0       	 <--TYPE
163       	 <--LEFT
324       	 <--TOP
99       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVINT
A
10
qismet
id9
92       	 <--TYPE
329       	 <--LEFT
377       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
qismet
0

id10
3       	 <--TYPE
505       	 <--LEFT
395       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id12
0       	 <--TYPE
347       	 <--LEFT
269       	 <--TOP
77       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
A
qismet

id13
3       	 <--TYPE
381       	 <--LEFT
471       	 <--TOP
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
551       	 <--LEFT
381       	 <--TOP
239       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
ededin terkibindeki 0 larin sayi
saygac

  
---- LINES ---- from,to ----
id5,id7
reserved 1
EVET
id1,id6
reserved 1

id6,id4
reserved 1

id4,id3
reserved 1

id3,id8
reserved 1

id8,id5
reserved 1

id5,id9
reserved 1
HAYIR
id9,id10
reserved 1
EVET
id7,id13
reserved 1

id13,id9
reserved 1

id10,id14
reserved 1

id14,id2
reserved 1

id9,id12
reserved 1
HAYIR
id12,id3
reserved 1

