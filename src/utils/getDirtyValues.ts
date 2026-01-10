type Primitive = string | number | boolean | null | undefined;

type DirtyFields<T> = {
    [K in keyof T]?: T[K] extends Primitive
    ? boolean
    : T[K] extends Array<unknown>
    ? boolean
    : DirtyFields<T[K]>;
};

export function getDirtyValues<T extends Record<string, unknown>>(
    dirty: DirtyFields<T>,
    values: T
): Partial<T> {
    const result: Partial<T> = {};

    for (const key in dirty) {
        const dirtyValue = dirty[key];
        const currentValue = values[key];

        if (dirtyValue === undefined) continue;

        if (Array.isArray(currentValue)) {
            result[key] = currentValue;
            continue;
        }

        if (
            typeof dirtyValue === 'object' &&
            dirtyValue !== null &&
            typeof currentValue === 'object' &&
            currentValue !== null
        ) {
            const nested = getDirtyValues(
                dirtyValue,
                currentValue as Record<string, unknown>
            );

            if (Object.keys(nested).length > 0) {
                result[key] = nested as T[typeof key];
            }

            continue;
        }

        if (dirtyValue === true) {
            result[key] = currentValue;
        }
    }

    return result;
}
