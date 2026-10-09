public static int countSetBits(long n) {
    // return the number of bits set to 1 in n (n >= 0)
    int c=0;
    while(n>0){
        c++;
        n=(n&(n-1));
    }
    return c;
}