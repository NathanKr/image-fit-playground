<h2>Motivation</h2>
Better understand how an image with size w=1920px,h=1214px can fit into w=200px,h=300px 

<h2>Options</h2>
<p>In case you use object-fit you do not need container but need to set the new size dimention on the image<p>
<ul>
<li>object-fit:contain -> the image has same size as content to fit and fit exactly. not clear why <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit'>doc say it aspect ratio is kept</a> </li>
<li>object-fit:cover -> the image has same size as content to fit. the image keeps its aspect ratio and cliped to big</li>
</ul>
<p>In case you do not use object-fit you need container and play with the image width\geight via 100%</p>
<ul>
<li>use container and image width 100% to fit the container's width and aspect ratio. but some of the container is empty</li>
<li>use container and image height 100% to fit the container's height and aspect ratio. but some of image get out of the container horizontally</li>
<li>use container and image height 100% , width 100% to fit the container's height and width but aspect ratio is not kept. this looks to be same as object-fit : fill</li>
</ul>