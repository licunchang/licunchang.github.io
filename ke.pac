function FindProxyForURL(url, host) {
    if (isPlainHostName(host) ||
        dnsDomainIs(host, ".ke.com") ||
        dnsDomainIs(host, ".lianjia.com")) {

        return "PROXY 10.33.74.131:8888";
    } else {
        return "DIRECT";
    }
}