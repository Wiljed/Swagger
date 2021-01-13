/**
 * Summary. Checks two objects to se if they are considered equivalent.
 * Equivalence is determined by checking the properties of both objects.
 * If both objects have the same number of properties and
 * all properties of both objects with the same key have the same value, they are considered
 * equivalent.
 * 
 * @param {Object} a first object
 * @param {Object} b second object
 * 
 * @return {boolean} true if they are considered equivalent, false otherwise
 */
export function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}