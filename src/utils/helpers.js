export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)
    return newNumber
}

export const getUniqueValues = (array, type) => {
    let unique = array.map((item) => item[type]);

    if (type === 'colors') {
        // Flatten the array of arrays
        unique = unique.flat();
    }

    return ['all', ...new Set(unique)];
};
