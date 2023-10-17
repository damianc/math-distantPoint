# math-distantPoint

The `Math.distantPoint()` method is meant to get a point by distance from other point along a line segment.

```
distantPoint(
  [x1,y1],
  [x2,y2],
  dist,
  relative = false
)
```

It may be interpreted as follows:
- get a line $f$ that passes through both $(x_1,y_1)$ and $(x_2,y_2)$ points
- go given distance along the line $f$ from $(x_1,y_1)$ towards $(x_2,y_2)$
- if the `relative` parameter is `true`, then it is a percent of a full distance between the points
- return `[x,y]`, i.e., coordinates of the point found

## Examples

```
const p = {x:2, y:4};
const q = {x:8, y:3};
const distance = 2;

const [rx,ry] = Math.distantPoint(
	[p.x,p.y], [q.x,q.y], distance
);
const prDist = Math.hypot(
	rx-p.x, ry-p.y
);
console.log(
	distance === Math.round(prDist)
);
// true

const h = [
	(p.x+q.x)/2,
	(p.y+q.y)/2
];
const half = Math.distantPoint(
	[p.x,p.y], [q.x,q.y], 50, true
);
console.log(h, half);
// [5, 3.5]
// [5, 3.5]
```
