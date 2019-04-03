import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  name = 'Angular 5';
  public products;
  public filterData:any={};

//filter
constructor(){
  this.dataLoad();
  //this.filterData.model="Swift";
 this.filterData.Title=['BIOS Update Utility'];
}





  dataLoad(){
   this.products= [{"Title": "IOS Update (Bootable CD)",
            "Version": "1.31",
            "Size": "16.3 MB",
            "Priority": "Recommended",
            "Type": "ISO",
            "OperatingSystems": [
                "Windows 10 (64-bit)"
            ],
            "URL": "tps://download.lenovo.com/pccbbs/mobiles/r0puj19wd.iso",
            "MD5": "7604321f02e03241ac0e7736568f0b63",
            "SHA1": "b1b2d8a817175275931ac05143b877ccfe077deb",
            "SHA256": "4155ec23bdcb6a52e266dc3fdb1b51f8486378f0b9d55d2b52e264e758be5ddb"
        },
        {
            "Title": "BIOS Update Utility",
            "Version": "1.31",
            "Size": "7.38 MB",
            "Priority": "Recommended",
            "Type": "EXE",
            "OperatingSystems": [
                "Windows 10 (64-bit)"
            ],
            "URL": "https://download.lenovo.com/pccbbs/mobiles/r0puj19w.exe",
            "MD5": "914b4a928c2c868de50fa9e47810455d",
            "SHA1": "eec4c4c123a638f79e1891e72242cffe4ccaee18",
            "SHA256": "19aec646ad2b970d9296f174a51b21a8b278a17ad958102d0c313042bb6b066e"
        },
        {
            "Title": "README",
            "Version": "1.31",
            "Size": "18.1 KB",
            "Priority": "Recommended",
            "Type": "TXT README",
            "OperatingSystems": [
                "Windows 10 (64-bit)"
            ],
            "URL": "https://download.lenovo.com/pccbbs/mobiles/r0puj19w.txt",
            "MD5": "de10e8b8bb644fa8376fcb4c6960efad",
            "SHA1": "a1ce405ab6420552dcff6e8058db13e5d0d29fe6",
            "SHA256": "b9e88da9e907d0bc2069619b308e160d7f0cc8eb6bcf2a09b999bce894e7301e"
        },
        {
            "Title": "ReadMe for BIOS Update (Bootable CD)",
            "Version": "1.31",
            "Size": "20 KB",
            "Priority": "Recommended",
            "Type": "TXT README",
            "OperatingSystems": [
                "Windows 10 (64-bit)"
            ],
            "URL": "ttps://download.lenovo.com/pccbbs/mobiles/r0puj19wd.txt",
            "MD5": "3476b2536d5f7b2ecab0d9d90723285e",
            "SHA1": "5935ef43c207823ed839ba656a21fdef7f200bcb",
            "SHA256": "dbc0c7a88dca674e952bb9ab5181f7230ef9bcfe4347a559f489e4f5e5aba483"
        }]
  }
}
