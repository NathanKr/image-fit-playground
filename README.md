<h2>Motivation</h2>
Better understand how an image with size w=1920px,h=1214px can fit into w=200px,h=300px

<h2>Why would you want to fit an image into a pre defined width \ height container</h2>
A common use case is image gallery e.g. in <a href='www.nathankrasney.com'>www.nathankrasney.com</a> it appears in the following pages : about , courses , blog and events


<h2>Usage</h2>
Invoke the following and see the image fit options

```
npm run dev
```

<h2>Image fit options</h2>
<ul>
<li>use object fit on the image<li>
<li>use image container<li>
<li>use sharp to crop the image<li>
</ul>

<h2>Three properties that you can not achive together when you need to fit an image into a container with pre defined width and height</h2>
<ul>
<li>preserved the image aspect ratio</li>
<li>image fit container exactly</li>
<li>image is not clipped</li>
</ul>

On all the use cases that i have tried i was able to fulfil only two proerties out of the three