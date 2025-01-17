// 20250115154733
// by Shinnosuke ARIMA
// License: CC BY-NC-ND 4.0

/*
a=(x,y,o=mag(k=x/4-12.5,e=y/9)/9)=>point(
  (q=x+99+cos(9/k)+o*k*(cos(e*9)/3+cos(y/9)/.7)*sin(o*4-t))*.7*sin(c=o*e/30-t/8)+200,
  200+y/9*cos(c*4-t/2)-q/2*cos(c))
t=0,draw=$=>{t||createCanvas(w=400,w);background(6).stroke(w,46);for(t+=PI/60,i=3e4;i--;)a(i%100,i/150)}
*/

a=(x,y,o=mag(k=x/4-12.5,e=y)/9)=>point(
  200+(q=150+o*k*cos(20/k)*.3*N(k*100)*3)*cos((c=o*e/1500-t/2)-t/6)*sin(c-t/100),
  200+(y+50                 )*cos(c/2-t/2)-q/2*cos(c/20)
)
t=0,draw=$=>{t||createCanvas(w=400,w),N=noise;
  background(6);
  for(
    t+=PI/60,i=3e4;i--;)
    stroke(w,100-i/300),
    a(i%100,i/150)
}



/*
f=0,draw=o=>{
  for(
    f||createCanvas(W=400,W),
    background(P=PI),N=noise,
    n=1;n--;)
    for(
      G=(a,i)=>p=N(a,i)*W-99*cos(n+f),
      X=G(0,n),
      Y=G(n,0),
      a=-P;
      a<P;
      a+=P/256)
      for(i=1;i>0;i-=.005)
        stroke(W,(W-i*W)/22),
        point(N(i-f,f/3+n,a)*i*W+X,N(f/2+n,i-f,a)*i*W+Y);
        f+=.005
};

f=0,draw=o=>{
  for(
    f||createCanvas(W=400,W),
    background(P=PI),N=noise,
    n=1;n--;)
    for(
      G=(a,i)=>p=N(a,i)*W-99*cos(n+f),
      X=G(0,n),
      Y=G(n,0),
      a=-P;
      a<P;
      a+=P/256)
      for(i=1;i>0;i-=.005)
        stroke(W,(W-i*W)/22),
        point(N(i-f,f/3+n,a)*i*W+X,N(f/2+n,i-f,a)*i*W+Y);
        //f+=.005
};







a=(x,y,o=mag(k=x/4-12.5,e=y)/9)=>point(
  //200+o/10*(N(x*0.5)*k*4-(N(e*0.005)-0.5)*200),
  200+x*cos(c=o*e/1000-t/2),
  200+y
)
t=0,draw=$=>{
  t||createCanvas(w=400,w),N=noise;
  background(6);
  for(t+=PI/60,i=3e4;i--;)
    //stroke(100-i/300),
    stroke(100),
    a(i%100,i/150)
}
*/


