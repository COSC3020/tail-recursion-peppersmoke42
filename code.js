function fiboTailRecurse(n, a, b)
{
    if (n === 0)
        return a;
    if (n === 1)
        return b;
    return fiboTailRecurse(n - 1, b, a + b);
}