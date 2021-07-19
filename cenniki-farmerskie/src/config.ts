interface IConfig {
  api: string;
  logo: string;
  hosts: string[];
  websock: string;
  title: string;
  //czy klient może się logować
}

const config = {
  current: <IConfig>{},
  dev: <IConfig>{
    api: "https://api.939.pl:3000/",
    logo: "logo.png",
    websock: "https://api.939.pl:3000/",
    title: "cenniki",
    hosts: ["localhost:8080", "localhost:8082"]
  },
  zdzis: <IConfig>{
    api: "https://mechanik.szczecin.pl:30001/api",
    logo: "logo.png",
    websock: "http://localhost:30001",
    title: "Zdzis.com",
    hosts: ["localhost:8081", "91.227.122.10", "admin.zdzis.com"]
  }
  /*   garage: <IConfig>{
    api: "http://ngo.witkac.pl:30003/api",
    logo: "garage-logo.png",
    title: "Fit Garaż",
    clientLogin: false,
    clients: true,
    services: true,
    hosts: [
      "localhost:8083",
      "garage.test.witkac.pl",
      "garage.objectmanager.test.witkac.pl"
    ]
  }  */
};

config.current = config.dev;

const host = window.location.host;

//szukaj po hoście
for (const confname in config) {
  const cc = <IConfig>(<any>config)[confname];
  const hosts = cc.hosts;
  if (hosts) {
    for (let i = 0; i < hosts.length; i++) {
      if (hosts[i] == host) {
        config.current = cc;

        break;
      }
    }
  }
}

export default config;