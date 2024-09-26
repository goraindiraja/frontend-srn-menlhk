import { DataSRN, TableCard } from '@/components/TableCard';
import Image from 'next/image';

async function getData(): Promise<DataSRN[]> {
  // Fetch data from your API here.
  return [
    {
      noMetodologi: "KMSAH-001",
      judul: "Kerangka Metodologi Perhitungan",
      versi: "18 Oktober 2023",
      noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
      tanggalSurat: "2023-10-18"
    },
    {
      noMetodologi: "MSAH-001",
      judul: "Substitusi Minyak Tanah dengan LPG",
      versi: "	16 Juli 2021",
      noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
      tanggalSurat: "2023-10-18"
    },
    {
      noMetodologi: "MSAH-002",
      judul: "Pengurangan Deforestasi",
      versi: "18 Oktober 2023",
      noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
      tanggalSurat: "2023-10-18"
    },
    {
      noMetodologi: "MSAH-003",
      judul: "Pengurangan Degradasi Hutan",
      versi: "22 Agustus 2019",
      noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
      tanggalSurat: "2023-10-18"
    },
    {
      noMetodologi: "MSAH-004",
      judul: "Perhitungan emisi dekomposisi gambut",
      versi: "17 Feb 2020",
      noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
      tanggalSurat: "2023-10-18"
    }
  ]
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="w-4/5 py-6 px-12 bg-background">
      <section className="flex items-start ">
        <div>
          <h1 className="text-3xl mb-8 font-extrabold text-textColor">METODOLOGI</h1>
          <p className="text-gray-600 text-justify text-sm">
            Dalam Peraturan Menteri LHK No. 21/2022, Pasal 60 ayat (2) huruf f disebutkan bahwa penerbitan SPE-GRK dari Offset emisi persyaratan metodologi yang digunakan untuk mengukur capaian kinerja Pengurangan emisi GRK harus memenuhi salah satu kriteria yaitu, (1) ditetapkan oleh Direktur Jenderal; (2) ditetapkan oleh Badan Standarisasi Nasional; atau (3) disetujui oleh UNFCCC.
          </p>
          <p className="mt-4 text-gray-600 text-justify text-sm">
            Guna memfasilitasi persyaratan dimaksud, melalui Keputusan Direktur Jenderal PPI No. 22/PPI/IGAS/PPI.2/6/2017, telah dibentuk Tim Panel Metodologi. Tim Panel Metodologi menetapkan metodologi yang dapat diusulkan dan digunakan oleh penanggung jawab aksi.
          </p>
        </div>
        <Image src={"/assets/mainImg.png"} alt="metodologi-img" width={0} height={0} sizes="100vw" style={{ width: '40%', height: 'auto'}}/>
      </section>

      <section className="mt-2">
        <p className="text-sm text-gray-600">(1) Metodologi yang telah ditetapkan oleh Direktur Jendral adalah sebagai berikut:</p>

        <div className="grid grid-cols-2 gap-8 mt-4">
          <TableCard kategori={"Kategori 1"} data={data}/>
          <TableCard kategori={"Kategori 2"} data={data}/>
          <TableCard kategori={"Kategori 3"} data={data}/>
          <TableCard kategori={"Kategori 4"} data={data}/>
          <TableCard kategori={"Kategori 5"} data={data}/>
          <TableCard kategori={"Kategori 6"} data={data}/>
        </div>
      </section>
    </main>
  ); 
}
