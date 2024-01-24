import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FleekSdk, ApplicationAccessTokenService } from '@fleekxyz/sdk';
import { useState } from 'react';

// const applicationService = new ApplicationAccessTokenService({
//     clientId: 'client_bAKDA978GR272w6hNVat',
// })

// const fleekSdk = new FleekSdk({ accessTokenService: applicationService })
type IpfsFile = { content?: File; path?: string; } | null | File | undefined;


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [file, setFile] = useState<IpfsFile>()

  const uploadFileToIPFS = async (file: IpfsFile) => {
    try {
      const accessTokenService = new ApplicationAccessTokenService({ clientId: "client_bAKDA978GR272w6hNVat" });
    
      const fleekSDK = new FleekSdk({ accessTokenService });
      const ipfs = fleekSDK.ipfs();
    
      const result = await ipfs.add(file);
      console.log(result.cid.toString());
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <input type="file" name="" id="" onChange={(e)=>setFile(e.target.files[0])} />
        <button className='bg-white text-black px-3 py-2 rounded'
        onClick={()=>uploadFileToIPFS(file)}
        >
          Make Project Id
        </button>
      </div>
    </main>
  )
}

// https://ipfs.fleek.co/ipfs/QmamGi2MT3nHFKTpjRSKTmbwvPfoXG7MT25KXsn3TxWWuS
// https://bafybeifytlrodisd76s4ta5y7rgi5zvccfqowlpijwjzkg47klrvhax3fu.ipfs.dweb.link/

// https://cf-ipfs.com/ipfs/bafybeia3jmhcwp3qnp7z57xww2ddhnucduie4pjn6depmltvyvetwj7tme

