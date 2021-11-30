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