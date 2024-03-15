#include <bits/stdc++.h>
#define ll long long int
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;

    while (t--)
    {
        int n;
        cin >> n;
        string s;
        cin >> s;
        int ans = 0;
        for (int i = 0; i < n; i++)
        {
            if (s[i] == 'm')
            {
                if (s[i + 1] == 'a' && s[i + 2] == 'p')
                {
                    ans++;
                    i += 2;
                }
            }
            else if (s[i] == 'p')
            {
                if (s[i + 1] == 'i' && s[i + 2] == 'e')
                {
                    ans++;
                    i += 2;
                }
            }
        }
        cout << ans << endl;
    }

    return 0;
}