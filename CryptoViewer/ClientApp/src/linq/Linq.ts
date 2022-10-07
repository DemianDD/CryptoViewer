declare global {
    interface Array<T> {
        take(n: number): Array<T>;
    }
}
export function configureLinq() {
    Array.prototype.take = function (n: number) {
        const copy = [...this];

        return copy.slice(0, n);
    }
}