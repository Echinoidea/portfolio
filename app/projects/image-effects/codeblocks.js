export default {
  function_or: ``,
  function_bitmapOR: `private Color OR(Color color1, Color color2)
{
    Color output = color1;
    byte r1 = color1.R; byte g1 = color1.G; byte b1 = color1.B;
    byte r2 = color2.R; byte g2 = color2.G; byte b2 = color2.B;

    return Color.FromArgb(r1 | r2, g1 | g2, b1 | b2);
}

// Fast bitmap traversing -- credit: hashi, jcvandan on Stackoverflow
public Bitmap BitmapOR(Color comparisonColor)
{
    Bitmap output = inputImg;

    // Lock bits
    Rectangle rect = new Rectangle(0, 0, output.Width, output.Height);
    BitmapData bmpData = output.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format24bppRgb);

    // Get the address of the first line
    IntPtr ptr = bmpData.Scan0;

    // Declare arrays to hold the bytes of the bitmap
    int bytes = bmpData.Stride * output.Height;
    byte[] rgbValues = new byte[bytes];

    Marshal.Copy(ptr, rgbValues, 0, bytes);

    int stride = bmpData.Stride;

    output.UnlockBits(bmpData);

    for (int col = 0; col < bmpData.Height; col++)
    {
        for (int row = 0; row < bmpData.Width; row++)
        {
            byte r = (byte)(rgbValues[(col * stride) + (row * 3) + 2]);
            byte g = (byte)(rgbValues[(col * stride) + (row * 3) + 1]);
            byte b = (byte)(rgbValues[(col * stride) + (row * 3)]);

            output.SetPixel(row, col, OR(Color.FromArgb(r, g, b), comparisonColor));
        }
    }

    return output;
}`
}