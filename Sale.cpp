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

        ll ans = 0, maxAns = 0;

        vector<int> v;

        for (int i = 0; i < n; i++)
        {
            int x;
            cin >> x;
            v.push_back(x);
        }
        int s;
        for (int i = 0; i < n; i++)
        {
            ans += v[i] + 2 * v[i];
            s = v[i] * 2 + ans;
            maxAns = max(maxAns, s);
        }

        cout << maxAns << "\n";
    }

    return 0;
}
