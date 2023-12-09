#include <stdio.h>
#include <math.h>
#include <stdlib.h>



// 1. Написати funkciju za upis i  ispis niza, i funkcija који израчунава збир елеменатa niza

int upisNiza(int niz[]) {
    int n;
    printf("Unesite broj clanova niza (<10): ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("Unesite %d. clan: ", i+1);
        scanf("%d", &niz[i]);
    } 
    
}

int ispisNiza(int niz[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", niz[i]);
    }
}

int zbirNiza(int niz[], int n) {
    int suma = 0;
    for (int i = 0; i < n; i++) {
        suma += niz[i];
    } return suma;
}


int main() {
    int niz[10]; // Povecan je broj elemenata niza
    int n;
    int suma;
    n = upisNiza(niz); // Cuvamo vrednost koju vraca funkcija upisNiza MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARS
    ispisNiza(niz, n);
    suma = zbirNiza(niz, n);
    printf("Zbir niza je %d.\n", suma);

    return 0;
}