Math.distantPoint = (
	[px,py], [qx,qy], dist, relative=false
) => {
	const m = (qy-py)/(qx-px);
	const i = py - m * px;
	
	if (relative) {
		const segmentLength = Math.hypot(
			qx-px, qy-py
		);
		dist = segmentLength / 100 * dist;
	}
	
	const vector = dist / Math.hypot(1, m);
	const pointX = px + vector;
	const pointY = m * pointX + i;
	
	return [pointX, pointY];
};
