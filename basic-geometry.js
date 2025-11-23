function getVectorLengthByCoord(x, y) {
    return Math.sqrt(x * x + y * y);
}

function getNormalVectorByCoord(x, y) {
    let len = getVectorLengthByCoord(x, y);
    return { x: x / len, y: y / len };
}

function getDeterminant(v1, v2) {
    return (v1.x * v2.y - v1.y * v2.x);
}

function getAngleByCoord(x1, y1, x2, y2) {
    let n1 = getNormalVectorByCoord(x1, y1);
    let n2 = getNormalVectorByCoord(x2, y2);
    let dt = getDotProductByVector(n1, n2);
    let rad = Math.acos(dt);

    var f = getDeterminant(n1, n2);
    if (f > 0) {
        rad = 2 * Math.PI - rad;
    }

    return { radians: rad, degrees: rad * 180 / Math.PI };
}

function getOrthogonalRightByCoord(x1, y1) {
    return { x: -1 * y1, y: x1 };
}

function getOrthogonalLeftByCoord(x1, y1) {
    return { x: y1, y: -1 * x1 };
}

function getVectorLengthByVector(vector) {
    return getVectorLengthByCoord(vector.x, vector.y);
}

function getNormalVectorByVector(vector) {
    return getNormalVectorByCoord(vector.x, vector.y);
}

function getDotProductByVector(pt1, pt2) {
    return (pt1.x * pt2.x + pt1.y * pt2.y);
}

function getAngleByVector(v1, v2) {
    return getAngleByCoord(v1.x, v1.y, v2.x, v2.y);
}

function getOrthogonalRightByVector(v) {
    return getOrthogonalRightByCoord(v.x, v.y);
}

function scalarProd(a, vector) {
    return { x: a * vector.x, y: a * vector.y };
}

function vectorSum(v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
}

function rotateVector(vector, theta) {
    // vector indicates a direction
    // theta is an angle in radians
    let a = Math.cos(theta);
    let b = Math.sin(theta);
    return { x: a * vector.x - b * vector.y, y: b * vector.x + a * vector.y };
}