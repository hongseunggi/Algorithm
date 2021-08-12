import java.util.*;
import java.io.*;

public class Main_2961_도영이가만든맛있는음식 {
	static int min = 1000000000;
	static int T;
	static int[] s;
	static int[] b;
	static int[] stt;
	static int[] btt;
	public static void cal(int idx, int count) {
		//System.out.println(Arrays.toString(stt));
		//System.out.println(Arrays.toString(btt));
		if(idx != 0) {
			int st = 1;
			int bt = 0;
			for(int i = 0; i < stt.length; i++) {
				st *= stt[i];
				bt += btt[i];
			}
			if(min > Math.abs(st-bt) && bt != 0) {
				//System.out.println(Arrays.toString(stt));
				//System.out.println(Arrays.toString(btt));
				//System.out.println(st+" "+bt);
				min = Math.abs(st-bt); 
			}
			if(idx == T) return;
		}
		
		    stt[count] = s[idx];
		    btt[count] = b[idx];
			cal(idx+1, count+1);
			stt[count] = 1;
			btt[count] = 0;
			cal(idx+1,count+1);
	}
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		T = Integer.parseInt(br.readLine());
		s = new int[T];
		b = new int[T];
 		
		for(int i = 0; i < T; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			s[i] = Integer.parseInt(st.nextToken());
			b[i] = Integer.parseInt(st.nextToken());
		}
		stt = new int[T];
		btt = new int[T];
		Arrays.fill(stt, 1);
		cal(0,0);
		System.out.println(min);
	}
}
