import java.util.*;
import java.io.*;

public class Main_17135_캐슬디펜스 {
	static int[][] map;
	static int[] archer;
	static int max = 0;
	static int N;
	static int M;

	public static void comb(int idx, int count, int d) {
		if (count == archer.length) {
			int cnt = 0;
			int[][] mapcopy = new int[N][M];
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < M; j++) {
					mapcopy[i][j] = map[i][j];
				}
			}
			while (true) {
				ArrayList<int[]> kill = new ArrayList<>();
				for (int i = 0; i < archer.length; i++) {
					int acherPoint = archer[i];
					int min = 11;
					int minx = 16;
					int miny = 16;
					for (int x = N - 1; x >= 0; x--) {
						for (int y = 0; y < M; y++) {
							if (mapcopy[x][y] == 1) {
								int len = Math.abs((N) - x) + Math.abs(acherPoint - y);
								if (len <= d) {
									if (min > len) {
										min = len;
										minx = x;
										miny = y;
									} else if (min == len) {
										if (miny > y) {
											minx = x;
											miny = y;
										}
									}
								}
							}
						}
					}
					if (minx != 16 && miny != 16)
						kill.add(new int[] { minx, miny });

				}
				for (int[] k : kill) {
					if (mapcopy[k[0]][k[1]] == 0)
						continue;
					mapcopy[k[0]][k[1]] = 0;
					cnt++;
				}
				int check = 0;
				int[][] temp = new int[N][M];
				for (int i = N - 1; i >= 0; i--) {
					for (int j = 0; j < M; j++) {
						if (i - 1 < 0)
							break;
						// if(i == N-1) mapcopy[i][j] = 0;
						temp[i][j] = mapcopy[i - 1][j];
						check += temp[i][j];
					}
				}
				mapcopy = temp;
				if (check == 0)
					break;
				// break;
			}
			if (cnt > max) {
				max = cnt;
			}
			return;
		}
		if(idx >= M) return;
		archer[count] = idx;
		comb(idx + 1, count + 1, d);
		// archer[count] = 0;
		comb(idx + 1, count, d);
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		int D = Integer.parseInt(st.nextToken());
		map = new int[N][M];
		archer = new int[3];

		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < M; j++) {
				map[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		comb(0, 0, D);
		System.out.println(max);
	}
}
