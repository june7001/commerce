import Image from 'next/image';
import flower1 from '../public/flower1.jpg';
import flower2 from '../public/flower2.jpg';

export function PoemSection() {
  return (
    <div>
      <div className="flex min-h-[40vh] flex-col pt-16 md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={flower1}
            width={900}
            height={700}
            alt="flower section image"
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-16 text-center font-serif text-lg font-medium italic md:w-1/2">
          <p>I wandered lonely as a cloud</p>
          <p>That floats on high o'er vales and hills,</p>
          <p>When all at once I saw a crowd,</p>
          <p>A host, of golden daffodils;</p>
          <p>Beside the lake, beneath the trees,</p>
          <p>Fluttering and dancing in the breeze.</p>
          <p>Continuous as the stars that shine</p>
          <p>And twinkle on the milky way,</p>
          <p>They stretched in never-ending line</p>
          <p>Along the margin of a bay:</p>
          <p>Ten thousand saw I at a glance,</p>
          <p>Tossing their heads in sprightly dance.</p>
        </div>
      </div>
      <div className="flex min-h-[40vh] flex-col-reverse pb-16 md:flex-row">
        <div className="flex flex-col items-center justify-center p-16 text-center font-serif text-lg font-medium italic md:w-1/2">
          <p>The waves beside them danced; but they</p>
          <p>Out-did the sparkling waves in glee:</p>
          <p>A poet could not but be gay,</p>
          <p>In such a jocund company:</p>
          <p>I gazed—and gazed—but little thought</p>
          <p>What wealth the show to me had brought:</p>
          <p>For oft, when on my couch I lie</p>
          <p>In vacant or in pensive mood,</p>
          <p>They flash upon that inward eye</p>
          <p>Which is the bliss of solitude;</p>
          <p>And then my heart with pleasure fills,</p>
          <p>And dances with the daffodils.</p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={flower2}
            width={900}
            height={700}
            alt="flower section image"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
