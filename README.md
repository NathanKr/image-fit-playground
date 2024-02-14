<h2>Motivation</h2>
Better understand how an image with size w=1920px,h=1214px can fit into w=200px,h=300px

<h2>Why should you fit an image into a pre defined width \ height container</h2>
A common use case is image gallery e.g. in <a href='www.nathankrasney.com'>www.nathankrasney.com</a> it appears in the following pages : about , courses , blog and events


<h2>Usage</h2>
Invoke the following and see the image fit options

```
npm run dev
```

<h2>Image fit options</h2>
<ul>
<li>use object fit on the image</li>
<li>use image container</li>
<li>use sharp to crop the image</li>
</ul>

<h2>Three properties consraints</h2>

<h3>Facts</h3>
You can not achive all the follwoing simultaneously when you need to fit an image into a container with pre defined width and height
<ul>
<li>preserved the image aspect ratio</li>
<li>image fit container exactly</li>
<li>image is not clipped</li>
</ul>

On all the use cases that i have tried i was able to fulfil only two proerties out of the three

<h3>Which proerties must be kept</h3>
<ul>
<li>You must preserve the image aspect ratio otherwise the image will be distorted - this will cause bad UI</li>
<li>You must fit the image exactly into the container otherwise the UI will appears not symetric</li>
<li>image is not clipped - this may be relaxed if the final result looks good enough. If not you might take other picture where cliping looks good</li>
</ul>

<h2>How to clip</h2>
You have two options 
<ul>
 <li>clip using object-fit:cover</li>
 <li>clip using the package sharp</li>
 </ul

 clip using sharp is better :
 <ul>
 <li>better UI - you get better result as shown in ths repo ui</li>
 <li>better performance #1- the downloaded image is smaller thus load quickly</li>
 <li>better performance #2- cliping is done on build time using sharp while online using object-fit</li>
 </ul