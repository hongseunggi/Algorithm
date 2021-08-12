import java.util.*;
import java.io.*;

public class Main_bj_3040_백설공주와일곱난쟁이 {
	static int sum;
	static int[] pic;
	static int[] result = new int[7];;
	static int[] v;
	public static void c(int idx, int count) {
		if(count == 7) {
			//System.out.println(Arrays.toString(pic));
			for(int i = 0; i < pic.length; i++) {
				sum += pic[i];
			}
			if(sum == 100) {
				//System.out.println("aa"+Arrays.toString(pic));
				//result
				for(int i = 0; i < pic.length; i++) {
					result[i] = pic[i];
				}
				//System.out.println(Arrays.toString(result));
			}
			else sum = 0;
			return;
		}
		for(int i = idx; i < 9; i++) {
			pic[count] = v[i];
			//System.out.println(Arrays.toString(pic)+" "+count);
			c(i+1,count+1);
		}
	}
	
	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		
		v = new int[9];
		pic = new int[7];
		for(int i = 0; i < 9; i++) {
			v[i] = Integer.parseInt(br.readLine());
		}
		c(0,0);
		for(int num : result) {
			System.out.println(num);	
		}
		//System.out.println(Arrays.toString(result));
	}

}
