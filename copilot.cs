// #include<bits/stdc++.h>
// using namespace std;
// int main()
// {
//     int a[6][6];

//     double maxVal=-9999999999;


//     for(int i=0; i<6; i++)
//     {
//         for(int j=0; j<6; j++)
//         {
//             cin >>a[i][j];
//         }
//     }

//     for(int i=0; i<4; i++)
//     {

//         for(int j=0; j<4; j++)
//         {
//             double current=a[i][j]+a[i][j+1]+a[i][j+2]+a[i+1][j+1]+a[i+2][j]+a[i+2][j+1]+a[i+2][j+2];
//             if(current>maxVal)maxVal=current;

// //            cout<<a[i][j]<<" "<<a[i][j+1]<<" "<<a[i][j+2]<<endl;
// //            cout<<" "<<" "<<a[i+1][j+1]<<" "<<" "<<endl;
// //            cout<<a[i+2][j]<<" "<<a[i+2][j+1]<<" "<<a[i+2][j+2]<<endl<<endl<<endl;
//         }

//     }
//    cout <<"MAX: "<<maxVal;

// //
// //    for(int i=0; i<6; i++)
// //    {
// //        for(int j=0; j<6; j++)
// //        {
// //            cout <<a[i][j]<<" ";
// //        }
// //        cout<<endl;
// //    }
// }


using System;

static class LogLine
{
    public static string Message(string logLine)
    {
        string[] strs1 = logLine.Split(":");
        return strs1[1].Trim();

    }

    public static string LogLevel(string logLine)
    {
        string[] strs2 = logLine.Split(":");
        char[] charsToTrim = { '[', ']' };
        string level = strs2[0].Trim(charsToTrim);
        return level;
    }

    public static string Reformat(string logLine)
    {
        char[] charsToTrim = { '[', ']' };
        string[] strs3 = logLine.Split(":");
        string le = strs3[0].Trim(charsToTrim);
        string me = strs3[1].Trim();
        return me;
    }
}
