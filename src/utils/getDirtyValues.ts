export function getDirtyValues<T>(dirty: any, values: T): Partial<T> {
    return Object.keys(dirty).reduce((acc, key) => {
        const value = values[key as keyof T];

        if (typeof dirty[key] === 'object' && !Array.isArray(dirty[key])) {
            const nested = getDirtyValues(dirty[key], value);
            if (Object.keys(nested).length > 0) {
                acc[key as keyof T] = nested as any;
            }
        } else {
            acc[key as keyof T] = value;
        }

        return acc;
    }, {} as Partial<T>);
}