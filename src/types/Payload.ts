type Payload =
  | string
  | { [key: string]: any } // GenericObject
  | ArrayBuffer
  | ArrayBufferView
  | URLSearchParams
  | FormData
  | File
  | Blob;

export default Payload;
