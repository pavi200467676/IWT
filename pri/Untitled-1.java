class MatrixTranspose {

  public static void main(String[] args) {
    // given matrix M whose transpose is to be found
    int M[][] = { { 2, 5, 3, 8 }, { 12, 66, 6, 4 }, { 1, 16, 42, 9 } };

    // find number of rows and columns in matrix M
    int n = M.length, m = M[0].length;

    // create empty transpose matrix of size m*n
    int M_transpose[][] = new int[m][n];

    // traverse matrix M
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        //assign M_transpose[j][i] as M[i][j]
        M_transpose[j][i] = M[i][j];
      }
    }

    // output the transpose matrix
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        System.out.print(M_transpose[i][j] + "    ");
      }
      System.out.println();
    }
  }
}
